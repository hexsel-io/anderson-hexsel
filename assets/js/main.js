(function () {
  'use strict';

  // ── Theme toggle ──────────────────────────────────────────────
  var THEME_KEY = 'hexsel-theme';
  var root = document.documentElement;
  var toggles = document.querySelectorAll('.theme-toggle');

  function getCurrentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    toggles.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'light'));
    });
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  applyTheme(getCurrentTheme());

  // ── Mobile nav toggle ─────────────────────────────────────────
  var navToggle = document.querySelector('.nav__toggle');
  var navList   = document.getElementById('nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navList.classList.toggle('is-open', !open);
    });
    navList.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('is-open');
      }
    });
  }

  // ── Scroll-reveal ─────────────────────────────────────────────
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  }

  // ── Terminal animation ────────────────────────────────────────
  var terminalBody = document.getElementById('terminal-body');
  if (terminalBody && !prefersReduced) {
    var scenes = [
      {
        cmd: 'whoami',
        output: [
          { text: 'anderson.hexsel  //  pwc.ca', cls: 'out' },
          { text: '', cls: 'blank' }
        ]
      },
      {
        cmd: "cat profile.json | jq '.role'",
        output: [
          { text: '"Senior Cloud & Platform Architect"', cls: 'out' },
          { text: '# Toronto, ON  ·  18+ years', cls: 'comment' },
          { text: '', cls: 'blank' }
        ]
      },
      {
        cmd: 'az cognitiveservices account list --query "[].name" -o tsv',
        output: [
          { text: 'oai-enterprise-prod-canadacentral', cls: 'out' },
          { text: 'oai-analytics-dev-eastus2', cls: 'out' },
          { text: 'oai-fsi-pilot-canadaeast', cls: 'out' },
          { text: '', cls: 'blank' }
        ]
      },
      {
        cmd: 'az ml workspace list --query "[].name" -o tsv',
        output: [
          { text: 'ml-finops-anomaly-detection', cls: 'out' },
          { text: 'ml-workload-classifier', cls: 'out' },
          { text: '', cls: 'blank' }
        ]
      },
      {
        cmd: 'git log --oneline -4',
        output: [
          { text: 'a8f2c1d feat: Azure OpenAI private landing zone', cls: 'out' },
          { text: '3b9e44f fix: FinOps anomaly detection pipeline', cls: 'out' },
          { text: '9c12f8a arch: 1,200+ server migration complete', cls: 'out' },
          { text: '2d4a11c docs: AI readiness framework for FSI', cls: 'out' },
          { text: '', cls: 'blank' }
        ]
      }
    ];

    var sceneIdx   = 0;
    var charIdx    = 0;
    var outIdx     = 0;
    var phase      = 'start';
    var promptLine = null;
    var timer      = null;

    function line(cls) {
      var d = document.createElement('div');
      d.className = 't-line t-' + cls;
      terminalBody.appendChild(d);
      return d;
    }

    function scroll() { terminalBody.scrollTop = terminalBody.scrollHeight; }

    function schedule(ms) {
      clearTimeout(timer);
      timer = setTimeout(tick, ms);
    }

    function startScene(idx) {
      sceneIdx   = idx;
      charIdx    = 0;
      outIdx     = 0;
      promptLine = line('prompt');
      promptLine.innerHTML = '<span class="t-ps">$ </span><span class="t-cmd"></span><span class="t-cursor"></span>';
      phase = 'typing';
      schedule(220 + Math.random() * 120);
    }

    function tick() {
      var scene = scenes[sceneIdx];

      if (phase === 'typing') {
        var cmd = scene.cmd;
        if (charIdx < cmd.length) {
          promptLine.querySelector('.t-cmd').textContent += cmd[charIdx++];
          scroll();
          schedule(28 + Math.random() * 44);
        } else {
          var cur = promptLine.querySelector('.t-cursor');
          if (cur) cur.remove();
          phase = 'output';
          schedule(160 + Math.random() * 100);
        }

      } else if (phase === 'output') {
        if (outIdx < scene.output.length) {
          var def = scene.output[outIdx++];
          var l   = line(def.cls);
          l.textContent = def.text;
          scroll();
          schedule(def.cls === 'blank' ? 30 : 70);
        } else {
          phase = 'pause';
          schedule(1000);
        }

      } else if (phase === 'pause') {
        var next = sceneIdx + 1;
        if (next < scenes.length) {
          startScene(next);
        } else {
          phase = 'clear';
          schedule(2800);
        }

      } else if (phase === 'clear') {
        // Type "clear" then wipe
        promptLine = line('prompt');
        promptLine.innerHTML = '<span class="t-ps">$ </span><span class="t-cmd"></span><span class="t-cursor"></span>';
        var clearCmd = 'clear';
        var ci = 0;
        phase = 'typing-clear';
        (function typeClear() {
          if (ci < clearCmd.length) {
            promptLine.querySelector('.t-cmd').textContent += clearCmd[ci++];
            scroll();
            timer = setTimeout(typeClear, 60);
          } else {
            timer = setTimeout(function () {
              terminalBody.innerHTML = '';
              sceneIdx = 0;
              startScene(0);
            }, 350);
          }
        })();
      }
    }

    // Start after a short delay
    schedule(900);
  }

  // ── Footer year ───────────────────────────────────────────────
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
