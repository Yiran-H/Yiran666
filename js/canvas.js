/**
 * js/canvas.js
 * Animated particle network background
 */

(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H, nodes = [];
  const mouse = { x: -9999, y: -9999 };

  const LINK_DIST  = 130;
  const MOUSE_DIST = 160;
  const NODE_COLOR = "0, 212, 255";

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initNodes() {
    nodes = [];
    const count = Math.max(30, Math.floor((W * H) / 14000));
    for (let i = 0; i < count; i++) {
      nodes.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 1.5 + 0.4,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];

      // Move
      n.x += n.vx;
      n.y += n.vy;

      // Bounce
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;

      // Mouse repulsion
      const mdx = n.x - mouse.x;
      const mdy = n.y - mouse.y;
      const md  = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < MOUSE_DIST && md > 0) {
        const force = (MOUSE_DIST - md) / MOUSE_DIST * 0.55;
        n.x += (mdx / md) * force;
        n.y += (mdy / md) * force;
      }

      // Draw node
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${NODE_COLOR}, 0.55)`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(${NODE_COLOR}, ${(1 - d / LINK_DIST) * 0.18})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  // Init
  resize();
  initNodes();
  draw();

  // Events
  window.addEventListener("resize", () => { resize(); initNodes(); });
  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });
})();
