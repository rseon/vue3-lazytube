import { defineComponent, isVue2, h } from "vue-demi";
import { openBlock, createElementBlock, normalizeStyle, renderSlot, Fragment, toDisplayString, createCommentVNode, withDirectives, createElementVNode, vShow, createStaticVNode } from "vue";
var Wrapper_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {
  props: {
    aspectRatioValue: String | Number,
    maxWidth: String | Number
  },
  computed: {
    cssVars() {
      return {
        "--vlt-aspect-ratio": this.aspectRatioValue ? this.aspectRatioValue : 56,
        "--vlt-max-width": this.maxWidth ? this.maxWidth : "560px"
      };
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "vlt-wrapper",
    style: normalizeStyle($options.cssVars)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var Wrapper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const fetchingOembed = async (src, type = "youtube") => {
  let url = type === "youtube" ? `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${getYouTubeID(src)}&format=json` : `https://vimeo.com/api/oembed.json?url=${src}`;
  return await window.fetch(url);
};
const createIframe = (videoID, getTitle, iframeClass, type = "youtube", flag = true) => {
  let iframeEl = null;
  if (flag) {
    iframeEl = document.createElement("iframe");
    if (type === "youtube") {
      iframeEl.setAttribute("src", `https://www.youtube.com/embed/${videoID}?enablejsapi=1&autoplay=1`);
    } else {
      iframeEl.setAttribute("src", `https://player.vimeo.com/video/${videoID}?autoplay=1`);
    }
    iframeEl.setAttribute("frameborder", "0");
    iframeEl.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    iframeEl.setAttribute("allowfullscreen", "1");
    iframeEl.setAttribute("title", `${getTitle}`);
    iframeEl.setAttribute("class", `${iframeClass}`);
  }
  return iframeEl;
};
const isPostMessageSupported = () => {
  if (!window.postMessage) {
    return false;
  }
  return true;
};
const calcAspect = (aspect) => {
  const aspects = aspect.split(":");
  return typeof aspects[1] === "undefined" ? 56.25 : aspects[1] / aspects[0] * 100;
};
const getYouTubeID = (url) => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/u);
  return url[2] !== void 0 ? url[2].split(/[^0-9a-z_\-]/iu)[0] : url[0];
};
const getVimeoID = (url) => {
  return new URL(url).pathname.split("/").pop();
};
const getYoutubeThumbnail = (video_id, quality) => {
  if (video_id) {
    if (typeof quality === "undefined") {
      quality = "high";
    }
    let quality_key = "maxresdefault";
    if (quality === "default") {
      quality_key = "default";
    } else if (quality === "medium") {
      quality_key = "mqdefault";
    } else if (quality === "high") {
      quality_key = "hqdefault";
    } else if (quality === "standard") {
      quality_key = "sddefault";
    } else if (quality === "maxres") {
      quality_key = "maxresdefault";
    }
    return "https://img.youtube.com/vi/" + video_id + "/" + quality_key + ".jpg";
  }
  return false;
};
const getVimeoThumbnail = (video_id, quality) => {
  if (video_id) {
    if (typeof quality == "undefined") {
      quality = "high";
    }
    let quality_key = "960x540";
    if (quality === "default") {
      quality_key = "200x150";
    } else if (quality === "medium") {
      quality_key = "295x166";
    } else if (quality === "high") {
      quality_key = "640x360";
    } else if (quality === "standard") {
      quality_key = "960x540";
    } else if (quality === "maxres") {
      quality_key = "1280x720";
    }
    return "https://i.vimeocdn.com/video/" + video_id + "_" + quality_key + ".jpg";
  }
  return false;
};
var Preview_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    type: {
      type: String,
      default: "youtube",
      required: false
    },
    clicked: {
      type: Boolean,
      default: false,
      required: false
    },
    onceLoaded: {
      type: Boolean,
      default: false,
      required: false
    },
    isVideoFound: {
      type: Boolean,
      default: false,
      required: false
    },
    fetchingInfo: {
      type: Boolean,
      default: false,
      required: false
    },
    defaultThumbnailQuality: {
      type: String,
      default: "standard",
      required: false
    },
    videoTitle: {
      type: String,
      default: "",
      required: false
    },
    videoID: {
      type: String,
      default: "",
      required: true
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    },
    customThumbnail: {
      type: String,
      default: "",
      required: false
    }
  },
  computed: {
    isCustomTitleExist() {
      return this.customTitle.trim().length > 0;
    },
    isCustomThumbnailExist() {
      return this.customThumbnail.trim().length > 0;
    },
    defaultThumbnail() {
      if (this.type === "youtube") {
        return getYoutubeThumbnail(this.videoID, this.defaultThumbnailQuality);
      } else {
        return getVimeoThumbnail(this.videoID, this.defaultThumbnailQuality);
      }
    }
  }
};
const _hoisted_1 = { class: "vlt-preview" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = {
  key: 2,
  class: "ly-text"
};
const _hoisted_5 = { class: "ly-button-wrapper" };
const _hoisted_6 = {
  key: 0,
  height: "100%",
  version: "1.1",
  viewBox: "0 0 68 48",
  width: "100%"
};
const _hoisted_7 = /* @__PURE__ */ createElementVNode("path", {
  class: "ly-large-play-button-bg",
  d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
  fill: "#f00"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M 45,24 27,14 27,34",
  fill: "#fff"
}, null, -1);
const _hoisted_9 = [
  _hoisted_7,
  _hoisted_8
];
const _hoisted_10 = {
  key: 1,
  height: "100%",
  version: "1.1",
  viewBox: "0 0 68 48",
  width: "100%"
};
const _hoisted_11 = /* @__PURE__ */ createElementVNode("path", {
  class: "ly-large-play-button-bg--v",
  d: "M 63 0 C 55.79 0.13 34 0 34 0 S 12.21 0.13 0 0 C 0.06 13.05 0 24 0 24 s 0.06 10.95 0 24 C 12.21 47.87 34 48 34 48 s 21.79 -0.13 34 -0 C 67.94 34.95 68 24 68 24 S 67.94 13.05 68 0 z",
  fill: "#00adef"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createElementVNode("path", {
  d: "M 45,24 27,14 27,34",
  fill: "#fff"
}, null, -1);
const _hoisted_13 = [
  _hoisted_11,
  _hoisted_12
];
const _hoisted_14 = { class: "ly-loader-wrapper" };
const _hoisted_15 = /* @__PURE__ */ createElementVNode("span", { class: "ly-ring" }, [
  /* @__PURE__ */ createElementVNode("span"),
  /* @__PURE__ */ createElementVNode("span"),
  /* @__PURE__ */ createElementVNode("span")
], -1);
const _hoisted_16 = {
  key: 1,
  class: "ly-error-container"
};
const _hoisted_17 = /* @__PURE__ */ createStaticVNode('<span class="ly-error-icon"><svg fill="#fff" viewBox="0 0 48 48"><path d="M0 0h48v48H0V0z" fill="none"></path><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" fill-opacity="0.7"></path></svg></span><span class="ly-error-content"><span class="ly-error-content__reason"><span>Video unavailable</span></span><span class="ly-error-content__subreason"><span>This video is unavailable.</span></span></span>', 2);
const _hoisted_19 = [
  _hoisted_17
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", _hoisted_1, [
    !$props.onceLoaded ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $props.isVideoFound ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        $options.isCustomThumbnailExist ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $props.customThumbnail,
          alt: "Video - " + $props.videoTitle,
          onError: _cache[0] || (_cache[0] = ($event) => $event.target.src = $options.defaultThumbnail)
        }, null, 40, _hoisted_2)) : (openBlock(), createElementBlock("img", {
          key: 1,
          src: $options.defaultThumbnail,
          alt: "Video - " + $props.videoTitle
        }, null, 8, _hoisted_3)),
        $props.showTitle ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($props.videoTitle), 1)) : createCommentVNode("", true),
        withDirectives(createElementVNode("button", _hoisted_5, [
          renderSlot(_ctx.$slots, "button", {}, () => [
            $props.type === "youtube" ? (openBlock(), createElementBlock("svg", _hoisted_6, _hoisted_9)) : (openBlock(), createElementBlock("svg", _hoisted_10, _hoisted_13))
          ])
        ], 512), [
          [vShow, !$props.clicked]
        ]),
        withDirectives(createElementVNode("div", _hoisted_14, [
          renderSlot(_ctx.$slots, "loader", {}, () => [
            _hoisted_15
          ])
        ], 512), [
          [vShow, $props.clicked]
        ])
      ], 64)) : !$props.fetchingInfo ? (openBlock(), createElementBlock("div", _hoisted_16, _hoisted_19)) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true)
  ]);
}
var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  name: "Helper",
  computed: {
    aspectRatioValue: function() {
      return calcAspect(this.aspectRatio);
    },
    getTitle: function() {
      if (this.customTitle) {
        return this.customTitle;
      }
      return this.videoInfo !== null ? this.videoInfo.title : this.customTitle;
    }
  },
  methods: {
    resetView() {
      if (this.iframeEl !== null) {
        this.iframeEl.remove();
        this.iframeEl = null;
        this.clicked = false;
        this.onceLoaded = false;
      }
    },
    initiateIframe(autoplay = false, type = "youtube") {
      this.iframeEl = createIframe(this.videoID, this.getTitle, this.iframeClass, type);
      this.iframeEl.addEventListener("load", () => {
        if (this.fetchingInfo === false) {
          if (!this.onceLoaded) {
            this.onceLoaded = true;
          }
        }
        if (autoplay) {
          if (type === "youtube") {
            this.iframeEl.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
          } else {
            this.iframeEl.contentWindow.postMessage('{"method":"play"}', "*");
          }
        }
      });
      this.$el.appendChild(this.iframeEl);
      this.iframeEl.focus();
    }
  }
};
var LazyYoutube = defineComponent({
  mixins: [_sfc_main],
  props: {
    src: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: String,
      default: "16:9",
      validator: function(value) {
        return /^\d+:\d+$/u.test(value);
      },
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    },
    maxWidth: {
      type: String,
      default: "560px",
      required: false
    },
    autoplay: {
      type: Boolean,
      default: false,
      required: false
    },
    thumbnailQuality: {
      type: String,
      default: "standard",
      required: false
    },
    iframeClass: {
      type: String,
      default: "ly-iframe",
      required: false
    },
    customTitle: {
      type: String,
      default: "",
      required: false
    },
    customThumbnail: {
      type: String,
      default: "",
      required: false
    },
    oembedFetch: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      clicked: false,
      onceLoaded: false,
      iframeEl: null,
      videoInfo: null,
      fetchingInfo: true,
      isVideoFound: false
    };
  },
  mounted() {
    if (this.oembedFetch) {
      fetchingOembed(this.src).then(function(response) {
        return response.json();
      }).then((response) => {
        this.videoInfo = response;
        this.isVideoFound = true;
      }).catch(() => {
        this.videoInfo = null;
        this.isVideoFound = false;
      }).finally(() => {
        this.fetchingInfo = false;
        if (this.autoplay) {
          this.playVideo();
        }
      });
    } else {
      this.isVideoFound = true;
      this.fetchingInfo = false;
    }
  },
  methods: {
    pauseVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl !== null) {
        this.iframeEl.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      }
    },
    playVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl === null) {
        this.initiateIframe(this.autoplay);
      } else {
        this.iframeEl.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
      }
    },
    stopVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl !== null) {
        this.iframeEl.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
      }
    }
  },
  computed: {
    videoID: function() {
      return getYouTubeID(this.src);
    }
  },
  render() {
    if (isVue2) {
      return h(Wrapper, {
        aspectRatioValue: this.aspectRatioValue,
        maxWidth: this.maxWidth
      }, () => [h(Preview, {
        isVideoFound: this.isVideoFound,
        fetchingInfo: this.fetchingInfo,
        defaultThumbnailQuality: this.thumbnailQuality,
        customThumbnail: this.customThumbnail,
        videoTitle: this.getTitle,
        videoID: this.videoID,
        showTitle: this.showTitle,
        clicked: this.clicked,
        onceLoaded: this.onceLoaded,
        on: {
          click: () => {
            this.clicked = true;
            if (this.fetchingInfo === false && !this.onceLoaded && this.isVideoFound) {
              this.initiateIframe();
            }
          }
        }
      }, {
        button: () => this.$slots.button ? this.$slots.button() : null,
        loader: () => this.$slots.loader ? this.$slots.loader() : null
      })]);
    }
    return h(Wrapper, {
      aspectRatioValue: this.aspectRatioValue,
      maxWidth: this.maxWidth
    }, () => [h(Preview, {
      isVideoFound: this.isVideoFound,
      fetchingInfo: this.fetchingInfo,
      defaultThumbnailQuality: this.thumbnailQuality,
      customThumbnail: this.customThumbnail,
      videoTitle: this.getTitle,
      videoID: this.videoID,
      showTitle: this.showTitle,
      clicked: this.clicked,
      onceLoaded: this.onceLoaded,
      onClick: () => {
        this.clicked = true;
        if (this.fetchingInfo === false && !this.onceLoaded && this.isVideoFound) {
          this.initiateIframe();
        }
      }
    }, {
      button: () => this.$slots.button ? this.$slots.button() : null,
      loader: () => this.$slots.loader ? this.$slots.loader() : null
    })]);
  }
});
var LazyVimeo = defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: String,
      default: "16:9",
      validator: function(value) {
        return /^\d+:\d+$/u.test(value);
      },
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    },
    maxWidth: {
      type: String,
      default: "560px",
      required: false
    },
    autoplay: {
      type: Boolean,
      default: false,
      required: false
    },
    thumbnailQuality: {
      type: String,
      default: "standard",
      required: false
    },
    iframeClass: {
      type: String,
      default: "ly-iframe",
      required: false
    },
    customTitle: {
      type: String,
      default: "",
      required: false
    },
    customThumbnail: {
      type: String,
      default: "",
      required: false
    },
    oembedFetch: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  mixins: [_sfc_main],
  data() {
    return {
      clicked: false,
      onceLoaded: false,
      iframeEl: null,
      videoInfo: null,
      fetchingInfo: true,
      isVideoFound: false
    };
  },
  mounted() {
    if (this.oembedFetch) {
      fetchingOembed(this.src, "vimeo").then(function(response) {
        return response.json();
      }).then((response) => {
        this.videoInfo = response;
        this.isVideoFound = true;
      }).catch(() => {
        this.videoInfo = null;
        this.isVideoFound = false;
      }).finally(() => {
        this.fetchingInfo = false;
        if (this.autoplay) {
          this.playVideo();
        }
      });
    } else {
      this.isVideoFound = true;
      this.fetchingInfo = false;
    }
  },
  methods: {
    pauseVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl !== null) {
        this.iframeEl.contentWindow.postMessage('{"method":"pause"}', "*");
      }
    },
    playVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl === null) {
        this.initiateIframe(this.autoplay, "vimeo");
      } else {
        this.iframeEl.contentWindow.postMessage('{"method":"play"}', "*");
      }
    },
    stopVideo() {
      if (!isPostMessageSupported) {
        return;
      }
      if (this.iframeEl !== null) {
        this.iframeEl.contentWindow.postMessage('{"method":"pause"}', "*");
      }
    }
  },
  computed: {
    videoID: function() {
      return getVimeoID(this.src);
    },
    processedThumbnail() {
      return this.customThumbnail ? this.customThumbnail : this.videoInfo !== null ? this.videoInfo["thumbnail_url"] : "";
    }
  },
  render() {
    if (isVue2) {
      return h(Wrapper, {
        aspectRatioValue: this.aspectRatioValue,
        maxWidth: this.maxWidth
      }, () => [h(Preview, {
        type: "vimeo",
        isVideoFound: this.isVideoFound,
        fetchingInfo: this.fetchingInfo,
        defaultThumbnailQuality: this.thumbnailQuality,
        customThumbnail: this.processedThumbnail,
        videoTitle: this.getTitle,
        videoID: this.videoID,
        showTitle: this.showTitle,
        clicked: this.clicked,
        onceLoaded: this.onceLoaded,
        on: {
          click: () => {
            this.clicked = true;
            if (this.fetchingInfo === false && !this.onceLoaded && this.isVideoFound) {
              this.initiateIframe(false, "vimeo");
            }
          }
        }
      }, {
        button: () => this.$slots.button ? this.$slots.button() : null,
        loader: () => this.$slots.loader ? this.$slots.loader() : null
      })]);
    }
    return h(Wrapper, {
      aspectRatioValue: this.aspectRatioValue,
      maxWidth: this.maxWidth
    }, () => [h(Preview, {
      type: "vimeo",
      isVideoFound: this.isVideoFound,
      fetchingInfo: this.fetchingInfo,
      defaultThumbnailQuality: this.thumbnailQuality,
      customThumbnail: this.processedThumbnail,
      videoTitle: this.getTitle,
      videoID: this.videoID,
      showTitle: this.showTitle,
      clicked: this.clicked,
      onceLoaded: this.onceLoaded,
      onClick: () => {
        this.clicked = true;
        if (this.fetchingInfo === false && !this.onceLoaded && this.isVideoFound) {
          this.initiateIframe(false, "vimeo");
        }
      }
    }, {
      button: () => this.$slots.button ? this.$slots.button() : null,
      loader: () => this.$slots.loader ? this.$slots.loader() : null
    })]);
  }
});
const PLUGINS = /* @__PURE__ */ new Map();
const addLazytubePlugin = (pluginName, plugin) => {
  if (PLUGINS.has(pluginName)) {
    console.warn(`pluginName is exist \u3010${pluginName}\u3011 \u8BE5\u63D2\u4EF6\u540D\u5DF2\u5B58\u5728, \u5168\u5C40\u53EA\u5F15\u5165\u4E00\u6B21\u5C31\u591F\u4E86!`);
    return;
  }
  PLUGINS.set(pluginName, plugin);
};
const installLazytube = (app) => {
  app.component("LazyYoutube", LazyYoutube);
  app.component("LazyVimeo", LazyVimeo);
};
export { LazyVimeo, LazyYoutube, addLazytubePlugin, installLazytube as install };
//# sourceMappingURL=vue-lazytube.es.js.map
