"use client";

import { useEffect } from "react";

/* ============================================================
   Fulcrum - landing page interactions (ported from main.js)
   Runs once after mount and wires up DOM-based behaviour on the
   server-rendered markup (nav, theme, FAQ, feature tabs, reveals…).
   ============================================================ */
export default function Interactions() {
  useEffect(() => {
    /* ---------- Sticky nav: translucent on scroll ---------- */
    var header = document.getElementById("siteHeader");
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu ---------- */
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    var onToggleClick, onLinksClick;
    if (toggle && links) {
      onToggleClick = function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        links.style.display = open ? "flex" : "";
      };
      onLinksClick = function (e) {
        if (e.target.closest("a") && links.classList.contains("is-open")) {
          links.classList.remove("is-open");
          links.style.display = "";
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Open menu");
        }
      };
      toggle.addEventListener("click", onToggleClick);
      links.addEventListener("click", onLinksClick);
    }

    /* ---------- Theme switch (Warm / Blue) ---------- */
    var themeSwitch = document.querySelector(".theme-switch");
    var onThemeClick;
    if (themeSwitch) {
      var root = document.documentElement;
      var metaTheme = document.querySelector('meta[name="theme-color"]');
      var THEME_BG = { warm: "#F2ECE0", blue: "#EAF1FC" };
      var currentTheme = function () {
        return root.getAttribute("data-theme") === "blue" ? "blue" : "warm";
      };
      var applyTheme = function (name) {
        if (name === "blue") root.setAttribute("data-theme", "blue");
        else root.removeAttribute("data-theme");
        try {
          localStorage.setItem("fulcrum-theme", name);
        } catch (e) {}
        if (metaTheme) metaTheme.setAttribute("content", THEME_BG[name]);
        themeSwitch.querySelectorAll(".theme-dot").forEach(function (d) {
          d.setAttribute("aria-pressed", String(d.getAttribute("data-theme-set") === name));
        });
      };
      onThemeClick = function (e) {
        var btn = e.target.closest(".theme-dot");
        if (btn) applyTheme(btn.getAttribute("data-theme-set"));
      };
      themeSwitch.addEventListener("click", onThemeClick);
      applyTheme(currentTheme());
    }

    /* ---------- Scattered map pins (For customers bg) ---------- */
    var pinField = document.getElementById("pinField");
    if (pinField) {
      var pins = [
        [8, 6, 26], [22, 88, 20], [40, 14, 22], [62, 4, 18], [12, 46, 16],
        [78, 92, 24], [55, 70, 16], [86, 30, 20], [30, 62, 14], [70, 50, 16],
        [46, 94, 18], [90, 62, 16], [6, 72, 14], [50, 34, 14],
      ];
      var pinSvg =
        '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>';
      pinField.innerHTML = pins
        .map(function (p) {
          return (
            '<svg style="top:' + p[0] + "%;left:" + p[1] + '%" width="' + p[2] + '" height="' + p[2] +
            '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' + pinSvg + "</svg>"
          );
        })
        .join("");
    }

    /* ---------- FAQ accordion ---------- */
    var faqList = document.getElementById("faqList");
    var onFaqClick;
    if (faqList) {
      onFaqClick = function (e) {
        var btn = e.target.closest(".faq-q");
        if (!btn) return;
        var item = btn.parentElement;
        var isOpen = item.classList.contains("is-open");
        faqList.querySelectorAll(".faq-item").forEach(function (it) {
          it.classList.remove("is-open");
          it.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      };
      faqList.addEventListener("click", onFaqClick);
    }

    /* ---------- Features: tabs + dashboard ---------- */
    var TABS = ["Customer management", "Offers and notifications", "Loyalty", "Referrals", "Analytics"];

    function stat(i, label, value, delta) {
      var bg = ["var(--forest)", "var(--coral)", "var(--stat-light-bg)"][i];
      var light = i === 2;
      var labelColor = light ? "var(--stat-light-fg)" : i === 1 ? "rgba(255,255,255,.82)" : "var(--on-dark-label)";
      var labelOpacity = light ? ".72" : "1";
      var valueColor = light ? "var(--stat-light-fg)" : "var(--cream)";
      var deltaColor = light ? "var(--stat-light-fg)" : i === 0 ? "var(--accent-on-dark)" : "var(--cream)";
      return (
        '<div class="dash-stat" style="background:' + bg + '">' +
        '<div class="s-label" style="color:' + labelColor + ";opacity:" + labelOpacity + '">' + label + "</div>" +
        '<div class="s-value" style="color:' + valueColor + '">' + value + "</div>" +
        '<div class="s-delta" style="color:' + deltaColor + '">' + delta + "</div></div>"
      );
    }

    var F = {
      "Customer management": {
        title: "Know every customer who walks in.",
        desc: "Profiles, visit history, preferences, spend - all in one place. No spreadsheet, no guesswork.",
        checklist: ["Auto-tagged customer profiles", "Birthday & anniversary reminders", "Notes & preferences per customer"],
        dashLabel: "Customer profiles · Sharma Sweets",
        stats: [["Profiles", "1,284", "↑ 126 new"], ["Auto-tagged", "96%", "of visits"], ["Avg spend", "₹840", "↑ 12%"]],
        accent: "var(--lime)", footer: "View all customers →",
        bars: [["Priya", 92], ["Arjun", 78], ["Meera", 64], ["Ravi", 51], ["Sana", 44], ["Neha", 33]],
      },
      "Offers and notifications": {
        title: "Send offers that actually get used.",
        desc: "Schedule SMS, WhatsApp, or in-app offers. Target by spend, frequency, or last visit - not spray-and-pray.",
        checklist: ["WhatsApp and SMS campaigns", "Segment by behaviour", "Track redemption in real-time"],
        dashLabel: "Campaign performance · This week",
        stats: [["Sent", "3,200", "this week"], ["Redeemed", "41%", "↑ 9 pts"], ["Top channel", "WhatsApp", "74% open"]],
        accent: "var(--coral)", footer: "View all campaigns →",
        bars: [["WhatsApp", 74, "74%"], ["SMS", 38, "38%"], ["In-app", 61, "61%"]],
      },
      Loyalty: {
        title: "Loyalty programs that run themselves.",
        desc: "Points, stamps, tiers - design a program in minutes. Customers earn on every visit, you earn every return.",
        checklist: ["Points, stamps, or tier-based", "Auto-expiry & reminders", "Digital card - no paper"],
        dashLabel: "Loyalty program · Live",
        stats: [["Members", "612", "↑ 48"], ["Redemption", "58%", "of points"], ["Repeat lift", "2.3×", "vs non-members"]],
        accent: "var(--sky)", footer: "Manage program →",
        bars: [["Bronze", 52, "312"], ["Silver", 72, "214"], ["Gold", 92, "86"]],
      },
      Referrals: {
        title: "Turn regulars into your best marketing.",
        desc: "Every happy customer becomes a channel. Reward both sides when a referral turns into a real, paying visit.",
        checklist: ["Two-sided reward on join", "Track every referral chain", "Auto-credit on first purchase"],
        dashLabel: "Referral funnel · 30 days",
        stats: [["Referrals", "214", "↑ 60"], ["Conversion", "29%", "share → buy"], ["New signups", "36%", "via referral"]],
        accent: "var(--coral)", footer: "View referral report →",
        bars: [["Shared", 100, "214"], ["Joined", 62, "132"], ["1st buy", 37, "78"], ["Repeat", 24, "51"]],
      },
      Analytics: {
        title: "Insights that actually change decisions.",
        desc: "See what’s working - and what isn’t. Repeat rate, top customers, best offers, all on one screen.",
        checklist: ["Repeat vs new customer ratio", "Offer performance tracking", "Weekly digest via WhatsApp"],
        dashLabel: "Live dashboard · This week at Sharma Sweets",
        stats: [["Visits", "482", "↑ 18%"], ["Repeat", "68%", "↑ 8 pts"], ["Revenue", "₹1.2L", "↑ 22%"]],
        accent: "var(--forest)", footer: "View full report →",
        dual: true, legend: [["New", "var(--coral)"], ["Repeat", "var(--forest)"]],
        bars: [["Mon", 40, 62], ["Tue", 44, 66], ["Wed", 38, 72], ["Thu", 50, 70], ["Fri", 46, 78], ["Sat", 58, 86], ["Sun", 54, 90]],
      },
    };

    function barCol(row, f) {
      var label = row[0], html;
      if (f.dual) {
        html =
          '<div class="bars">' +
          '<i style="height:' + row[1] + '%;background:var(--coral)"></i>' +
          '<i style="height:' + row[2] + '%;background:var(--forest)"></i></div>';
        return '<div class="chart-col"><div class="val"></div>' + html + '<div class="cap">' + label + "</div></div>";
      }
      var value = row[2] != null ? row[2] : row[1];
      html = '<div class="bars"><i style="height:' + row[1] + "%;background:" + f.accent + '"></i></div>';
      return '<div class="chart-col"><div class="val">' + value + "</div>" + html + '<div class="cap">' + label + "</div></div>";
    }

    function renderPanel(name) {
      var f = F[name];
      var checklist = f.checklist
        .map(function (c) {
          return '<div class="item"><span class="check">✓</span><span>' + c + "</span></div>";
        })
        .join("");
      var stats = f.stats.map(function (s, i) { return stat(i, s[0], s[1], s[2]); }).join("");
      var legend = f.dual
        ? '<div class="chart-legend">' +
          f.legend.map(function (l) { return '<span><i style="background:' + l[1] + '"></i>' + l[0] + "</span>"; }).join("") +
          "</div>"
        : "";
      var bars = f.bars.map(function (row) { return barCol(row, f); }).join("");

      return (
        '<div class="feature-copy">' +
        "<h3>" + f.title + "</h3>" +
        '<p class="desc">' + f.desc + "</p>" +
        '<div class="checklist">' + checklist + "</div>" +
        "</div>" +
        '<div class="feature-dash">' +
        '<div class="dash-label">' + f.dashLabel + "</div>" +
        '<div class="dash-stats">' + stats + "</div>" +
        '<div class="dash-chart">' + legend + '<div class="chart-bars">' + bars + "</div></div>" +
        '<div class="dash-foot"><span class="live"><i></i>Updated just now</span><a href="#">' + f.footer + "</a></div>" +
        "</div>"
      );
    }

    var tabsEl = document.getElementById("featureTabs");
    var panelEl = document.getElementById("featurePanel");
    var active = TABS[0];
    var onTabsClick;

    function paint() {
      tabsEl.innerHTML = TABS.map(function (t) {
        return '<button class="feature-tab" role="tab" aria-selected="' + (t === active) + '">' + t + "</button>";
      }).join("");
      panelEl.innerHTML = renderPanel(active);
      panelEl.classList.remove("panel-in");
      void panelEl.offsetWidth;
      panelEl.classList.add("panel-in");
    }

    if (tabsEl && panelEl) {
      onTabsClick = function (e) {
        var btn = e.target.closest(".feature-tab");
        if (!btn) return;
        active = btn.textContent;
        paint();
      };
      tabsEl.addEventListener("click", onTabsClick);
      paint();
    }

    /* ---------- Dual-app showcase toggle (Business / Customer) ---------- */
    var showcase = document.getElementById("appShowcase");
    var onShowcaseClick;
    if (showcase) {
      var appTabs = showcase.querySelectorAll(".app-tab");
      var appPanels = showcase.querySelectorAll(".app-panel");
      onShowcaseClick = function (e) {
        var btn = e.target.closest(".app-tab");
        if (!btn) return;
        var app = btn.getAttribute("data-app");
        appTabs.forEach(function (t) { t.setAttribute("aria-selected", String(t.getAttribute("data-app") === app)); });
        appPanels.forEach(function (p) {
          if (p.getAttribute("data-app") === app) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
        });
      };
      showcase.addEventListener("click", onShowcaseClick);
    }

    /* ---------- Reveal on scroll ---------- */
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = document.querySelectorAll(".reveal");
    function showAll() { reveals.forEach(function (el) { el.classList.add("is-in"); }); }

    var io, revealTimer;
    if (reduce || !("IntersectionObserver" in window)) {
      showAll();
    } else {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
      );
      reveals.forEach(function (el) { io.observe(el); });
      revealTimer = setTimeout(showAll, 1600);
    }

    /* ---------- Count-up stats (trust band) ---------- */
    var counters = document.querySelectorAll(".count[data-to]");
    function finalValue(el) {
      var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
      return parseFloat(el.getAttribute("data-to")).toFixed(dec);
    }
    var cio;
    if (counters.length) {
      if (reduce || !("IntersectionObserver" in window)) {
        counters.forEach(function (el) { el.textContent = finalValue(el); });
      } else {
        cio = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              var el = en.target;
              cio.unobserve(el);
              var to = parseFloat(el.getAttribute("data-to"));
              var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
              var dur = 1100, start = null;
              function tick(ts) {
                if (!start) start = ts;
                var p = Math.min((ts - start) / dur, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = (to * eased).toFixed(dec);
                if (p < 1) requestAnimationFrame(tick);
                else el.textContent = to.toFixed(dec);
              }
              requestAnimationFrame(tick);
            });
          },
          { threshold: 0.6 }
        );
        counters.forEach(function (el) {
          var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
          el.textContent = (0).toFixed(dec);
          cio.observe(el);
        });
      }
    }

    /* ---------- Cleanup ---------- */
    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
      if (toggle && onToggleClick) toggle.removeEventListener("click", onToggleClick);
      if (links && onLinksClick) links.removeEventListener("click", onLinksClick);
      if (themeSwitch && onThemeClick) themeSwitch.removeEventListener("click", onThemeClick);
      if (faqList && onFaqClick) faqList.removeEventListener("click", onFaqClick);
      if (tabsEl && onTabsClick) tabsEl.removeEventListener("click", onTabsClick);
      if (showcase && onShowcaseClick) showcase.removeEventListener("click", onShowcaseClick);
      if (io) io.disconnect();
      if (cio) cio.disconnect();
      if (revealTimer) clearTimeout(revealTimer);
    };
  }, []);

  return null;
}
