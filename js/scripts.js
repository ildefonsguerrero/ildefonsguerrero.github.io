/**
 * propios
 **/
$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    // var url = "http://192.168.0.13:8001/sendMail/&acc=2gYG-9G.";
    var url = "https://mailserver.ildeguerrero.repl.co/sendMail/&acc=2gYG-9G.";

    https: var correo = new Object();
    correo.nombre = $("#f_nombre").val().trim();
    correo.email = $("#f_email").val().trim();
    correo.telef = $("#f_telef").val().trim();
    correo.mensaje = $("#f_mensaje").val().trim();

    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify(correo),
      contentType: "application/json",
      dataType: "json",
      success: function (resp) {
        alert("Mensaje enviado correctamente");
        if (resp == "") {
          console.log("por 1");
          // para evitar que el "back" regrese a la encuesta
          // history.replaceState(null, null, `/fi/&id=${idioma}`);
          // mostramos la pantalla de fin
          // window.location.replace(`/fi/&id=${idioma}`);
          return false;
        } else {
          console.log("por 2");
          // $("#msgerr").html(resp);
          return false;
        }
      },
    });
  });

  $("#hmenu, .mod_navigation")
    .find(".haschildren")
    .each(function (e, s) {
      var l = $(s);
      $(s)
        .find("li")
        .each(function (e, s) {
          $(s).hasClass("current") && l.addClass("current");
        });
    }),
    $(window).scroll(function () {
      $(this).scrollTop() > 100
        ? $(".scrollup").fadeIn()
        : $(".scrollup").fadeOut();
    }),
    $(".scrollup").click(function () {
      return $("html, body").animate({ scrollTop: 0 }, 600), !1;
    }),
    new Waypoint.Sticky({ element: $(".top")[0] });
  $("#map_canvas1").addClass("scrolloff"),
    $("#canvas1").on("click", function () {
      $("#map_canvas1").removeClass("scrolloff");
    }),
    $("#map_canvas1").mouseleave(function () {
      $("#map_canvas1").addClass("scrolloff");
    }),
    $(".navbar-toggle").click(function () {
      $(this).parent().find("#menu_peque").slideToggle();
    }),
    $("#map_canvas1").addClass("scrolloff"),
    $("#canvas1").on("click", function () {
      $("#map_canvas1").removeClass("scrolloff");
    }),
    $("#map_canvas1").mouseleave(function () {
      $("#map_canvas1").addClass("scrolloff");
    });
});

/**
 * sticky
 **/
!(function () {
  "use strict";
  function t(s) {
    (this.options = e.extend({}, i.defaults, t.defaults, s)),
      (this.element = this.options.element),
      (this.$element = e(this.element)),
      this.createWrapper(),
      this.createWaypoint();
  }
  var e = window.jQuery,
    i = window.Waypoint;
  (t.prototype.createWaypoint = function () {
    var t = this.options.handler;
    this.waypoint = new i(
      e.extend({}, this.options, {
        element: this.wrapper,
        handler: e.proxy(function (e) {
          var i = this.options.direction.indexOf(e) > -1,
            s = i ? this.$element.outerHeight(!0) : "";
          this.$wrapper.height(s),
            this.$element.toggleClass(this.options.stuckClass, i),
            t && t.call(this, e);
        }, this),
      })
    );
  }),
    (t.prototype.createWrapper = function () {
      this.$element.wrap(this.options.wrapper),
        (this.$wrapper = this.$element.parent()),
        (this.wrapper = this.$wrapper[0]);
    }),
    (t.prototype.destroy = function () {
      this.$element.parent()[0] === this.wrapper &&
        (this.waypoint.destroy(),
        this.$element.removeClass(this.options.stuckClass).unwrap());
    }),
    (t.defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: "stuck",
      direction: "down right",
    }),
    (i.Sticky = t);
})();

/**
 * elipsis
 **/
!(function (s) {
  s.fn.shorten = function (e) {
    var t = { showChars: 100, ellipsesText: "â€¦" };
    return (
      e && s.extend(t, e),
      s(document).on(
        {
          click: function () {
            var e = s(this);
            return (
              e.hasClass("less")
                ? (e.removeClass("less"), e.html(t.moreText))
                : (e.addClass("less"), e.html(t.lessText)),
              e.parent().prev().toggle(),
              e.prev().toggle(),
              !1
            );
          },
        },
        ".morelink"
      ),
      this.each(function () {
        var e = s(this);
        if (!e.hasClass("shortened")) {
          e.addClass("shortened");
          var r = e.html();
          if (r.length > t.showChars) {
            var l = r.substr(0, t.showChars),
              h =
                (r.substr(t.showChars, r.length - t.showChars),
                l +
                  '<span class="moreellipses">' +
                  t.ellipsesText +
                  " </span>");
            e.html(h);
          }
        }
      })
    );
  };
})(jQuery);

!(function (s) {
  s.fn.shortenb = function (e) {
    var t = { showChars: 200, ellipsesText: "â€¦" };
    return (
      e && s.extend(t, e),
      s(document).on(
        {
          click: function () {
            var e = s(this);
            return (
              e.hasClass("less")
                ? (e.removeClass("less"), e.html(t.moreText))
                : (e.addClass("less"), e.html(t.lessText)),
              e.parent().prev().toggle(),
              e.prev().toggle(),
              !1
            );
          },
        },
        ".morelink"
      ),
      this.each(function () {
        var e = s(this);
        if (!e.hasClass("shortened")) {
          e.addClass("shortened");
          var r = e.html();
          if (r.length > t.showChars) {
            var l = r.substr(0, t.showChars),
              h =
                (r.substr(t.showChars, r.length - t.showChars),
                l +
                  '<span class="moreellipses">' +
                  t.ellipsesText +
                  " </span>");
            e.html(h);
          }
        }
      })
    );
  };
})(jQuery);

/**
 * tratamiento slick
 **/
$(document).ready(function () {
  $(".responsive_1").slick({
    dots: true,
    slide: "li",
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/**
 * parallax
 **/
$(document).ready(function () {
  "use strict";
  var o = $(".parallax");
  ($.onResize = function () {
    "gran" === tamany && $.onScroll();
  }),
    ($.onScroll = function () {
      var e,
        n,
        i = $(window).scrollTop();
      $(window).height();
      for (n = 0; n < o.length; n++)
        (e = $(o[n])).css(
          "background-position",
          "0 " + parseFloat(-0.6 * (i - e.offset().top)) + "px"
        );
    }),
    ($.scrollToSection = function (o) {
      var e = $("#" + o);
      $(window).scrollTo(
        e.offset().top + (e.outerHeight() / 2 - $(window).height() / 2),
        700,
        { axis: "y", easing: "easeInOutQuad" }
      );
    }),
    $(window).resize($.onResize),
    "gran" === tamany && ($(window).scroll($.onScroll), $.onResize()),
    o.each(function (o) {
      $(this).css(
        "background-image",
        "url(img/varios/parallax_" + (o + 1) + ".jpg)"
      );
    });
});
(function ($) {
  var h = ($.scrollTo = function (a, b, c) {
    $(window).scrollTo(a, b, c);
  });
  h.defaults = {
    axis: "xy",
    duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit: true,
  };
  h.window = function (a) {
    return $(window)._scrollable();
  };
  $.fn._scrollable = function () {
    return this.map(function () {
      var a = this,
        isWin =
          !a.nodeName ||
          $.inArray(a.nodeName.toLowerCase(), [
            "iframe",
            "#document",
            "html",
            "body",
          ]) != -1;
      if (!isWin) return a;
      var b = (a.contentWindow || a).document || a.ownerDocument || a;
      return /webkit/i.test(navigator.userAgent) || b.compatMode == "BackCompat"
        ? b.body
        : b.documentElement;
    });
  };
  $.fn.scrollTo = function (e, f, g) {
    if (typeof f == "object") {
      g = f;
      f = 0;
    }
    if (typeof g == "function") g = { onAfter: g };
    if (e == "max") e = 9e9;
    g = $.extend({}, h.defaults, g);
    f = f || g.duration;
    g.queue = g.queue && g.axis.length > 1;
    if (g.queue) f /= 2;
    g.offset = both(g.offset);
    g.over = both(g.over);
    return this._scrollable()
      .each(function () {
        if (e == null) return;
        var d = this,
          $elem = $(d),
          targ = e,
          toff,
          attr = {},
          win = $elem.is("html,body");
        switch (typeof targ) {
          case "number":
          case "string":
            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
              targ = both(targ);
              break;
            }
            targ = $(targ, this);
            if (!targ.length) return;
          case "object":
            if (targ.is || targ.style) toff = (targ = $(targ)).offset();
        }
        $.each(g.axis.split(""), function (i, a) {
          var b = a == "x" ? "Left" : "Top",
            pos = b.toLowerCase(),
            key = "scroll" + b,
            old = d[key],
            max = h.max(d, a);
          if (toff) {
            attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
            if (g.margin) {
              attr[key] -= parseInt(targ.css("margin" + b)) || 0;
              attr[key] -= parseInt(targ.css("border" + b + "Width")) || 0;
            }
            attr[key] += g.offset[pos] || 0;
            if (g.over[pos])
              attr[key] += targ[a == "x" ? "width" : "height"]() * g.over[pos];
          } else {
            var c = targ[pos];
            attr[key] =
              c.slice && c.slice(-1) == "%" ? (parseFloat(c) / 100) * max : c;
          }
          if (g.limit && /^\d+$/.test(attr[key]))
            attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
          if (!i && g.queue) {
            if (old != attr[key]) animate(g.onAfterFirst);
            delete attr[key];
          }
        });
        animate(g.onAfter);
        function animate(a) {
          $elem.animate(
            attr,
            f,
            g.easing,
            a &&
              function () {
                a.call(this, e, g);
              }
          );
        }
      })
      .end();
  };
  h.max = function (a, b) {
    var c = b == "x" ? "Width" : "Height",
      scroll = "scroll" + c;
    if (!$(a).is("html,body")) return a[scroll] - $(a)[c.toLowerCase()]();
    var d = "client" + c,
      html = a.ownerDocument.documentElement,
      body = a.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
  };
  function both(a) {
    return typeof a == "object" ? a : { top: a, left: a };
  }
})(jQuery);
