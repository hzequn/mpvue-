require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "comment"
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.winHeight + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "enable-back-to-top": true,
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.getShortCommentMore
    }
  }, [_c('comment-list', {
    attrs: {
      "json": _vm.comments,
      "bottomLoading": _vm.bottomLoading,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('my-loading', {
    attrs: {
      "loading": _vm.loading,
      "reload": _vm.getShortComment,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75a127e8", esExports)
  }
}

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAlgSURBVHhe7dkHb9w4EIbh/P9fFSC9996r03tvOjwEvtyAkHfli60NDiIwlsSlyJl3CrnrfVtbW8Mi/8oCpJMFSCcLkE4WIJ0sQDpZgHSyAOlkAdLJAqSTBUgnC5BOFiCdLEA6WYB0sgDpZC2QJ0+erJSxd3Yiz549a/L06dPh9u3bw8OHD4eXL18O9+/fb/1v3rwZrl27Nrx69Wq4devW8OLFizb2wYMHrW9Mpypja66SjQMxx6NHj5rxYDx+/Hh49+7dcP78+eH69evt2Zh79+41EN7Rl3frXGNi7Crpx/8VEVKN5fkvX74Mx44dG27cuDHcvHlzeP/+fYsSoEQOcM+fP2/3/Xy9jEGo0o/feA0R9nfv3m1wGQoCIOfOnRs+fPjQQEgTY1xBYAgg4PUO6mVszVWycSCMFCEiReoAog8IzWf6gFNjvGMsKAwWWaukB9RLr89aIDW8xmTsnZ0ICLwOAgU9g6GAakBcvny5FderV682GAyt76ySsTVXycaBSBNCeTDevn07HD9+vH329evXJlJDyogW4zwnqsZ0qmLOVdLrs3EgvO3KQCmhfhw4cKAV0h8/frQoUUtOnz7dtmNGKLQpqAG6nYC3SqouZC0QnhGuUVT4JmQjmTgh7B39PEgp4PR7TsjrY5x3jFEnPn361KCcOXOmgfj582e7atbQnzpy586dJu59Bqh5zA0cne1KHz9+HF6/ft3mtibQdHGVjoozPaLzpAixmFBW+S168eLFls88Z8IYyjhXCwYAxSjo2bsBlPFJBV5PnQiQX79+tShxZZRxdGKotRlLL5/Rw2fGOL9cunSp6WmuEydODBcuXBiOHDnS+k6ePDlcuXKl9dGFTqC6rgXCEAtQnrJy2mSEUTGIuE+0eM9ivIg8LwSU/njVHDylj1GUdCjr27dv39oYnxGRythDhw41A/VxGOMPHz48HDx48PdnzjRS7ujRo22MvqyjeNPP3GQtEIoTXo6iwo9hJo7XPDM6hsVjvA5mwlLIBxKPeC9HdcoxkgNq+/79e7uKCO9a0/yuYH7+/LkBEyk+Fx10ZfTZs2eHU6dONSCu5le0gSPGJQ3JWiAWsDhPmjyNkiEcwxjNMEJZ74ok6QCqOSgNkmsg22YZwetqiX5NqmiMTVPLakvh1egpJUSC9BAZoIgKIHzGBo70OTDGWj/2TgKSXOc5hS5KSB9GxBAQwAEEANHC+ABIilGSQvv372+wvKMYGpNo0HJfi6s+6+sTqYEFnjmABSCOYKx7MOjFBn0coQRILVe2TkoZBlDUQiJAeFalfQYaIKIkKZJoSJQIWR6hLMUYozEokdA3/SIiTqhg+maseaUB2KLAmhHRIjU4gy3GgWQsSInwSRFCeaHmuYasnNZMhDgolBIxUch9okxEpTGgpkKMdyUVWFoc4Zq1A8k46zA0RTQ7DFFgRYw+uiq8nMNJ0l50/d5lUmFJQDBS2BtscQZ6gbJarpqoMSGFCNq2xSgbD+ee4TX3tRoB5q4gVrWM8z4QMZIDQZESiqln/cAYl0IrfYCS7uxdC0SYOcSgrH8MiEahHLV5sH4+NpYh+iu0moo9sO1agHif96UEXd0zmiPd5xkYqQKccRwYGJOAqCHqgpdV8f/SKBsoDBBNQBOHrLQKpIe4XatAFEfGBoIrvUVCIkY/GJ4BYmdkEhA1Qf6bGJjtGoV4lVQAfRTYUhU1YSuEAU80TIVQW94Fk7fjecYS9/qsCYZt1trqSHa4AJlUQ1w9mziFLgZWAyqQvr829YViyXchrgalebdCnNqkKv1FhbldUyMUdmsFEhhqI7tEqZSJnWuBuHflzYR09SjFK4Da+n7vizgKK27AULgC0cxf02dKA0QEA0HXpIr1wFBcresIAIB+V2Bc2c5Za4Fk97BIWpQFw30A1TbmZePUIUrlYOSs0o/znNowtZnbe4wHAhBwcuZw3rAmW9glVUUHMImOSUAcsLxYgdRClrYqWnpgIPYHvB7sToDUNQMbBDrnC54zEvvYxR5A2MnhbHRtQPwJFNc8KzBCyZarIvNmDIjiY8bvdhuLntrXp5ufA0QBnaWIlABAHwhs4mj2EbZWWQvEtmhyud4DmaP1QNL0Rw8HvZxc6ch5dhMFG4gxGCIlqVJlLZD8MOS8HwXmBMLAMSh0qGklWoU+XfMNlu5sIGpFhVHLQ5XJQORgUiSRMlcDJKfgMWfYXdSOfD9hS34vqelRQbAztlZZC8RiFpGLaXMD0YCokcI59GCks4VdRGrYtdji0EWSGvp6GAqp5yprgVgAEIUpbU4gDO9hWF96cJL0EB30dqKms2efGVNBxL7IfwLiJzrbmKKUNicQa6kVdU3fpBlsW6UjnV0VUaktqjlShPRAYmOk9pO1QPIz36aApNUI8RWCbnY/utKNRH8FlLgfA5JxsbXKvjo4LxPFSE4KQzkqUlLQcp3jHBL41qzrgiGNhb1rIiX1Qj+nVmOnyCgQkwJiEXm4SSB1zRolKfT04zi6suGPgfjTQzERIMSzo6+8jELx2pxArF3X87uHs5Htdc+AJOcqDAsB4sS6CSBZs7/aSXytV+PoOAbEfQydKq2o1kl05lTnWaX2RUllD4A5i2rW7Ne2m9hVpHKKKN1Fxa4BkY860QZEQeUJ21t+HNLmBKLVSHRa1RRSv6dIZbruGpC8aBL5qNMWZhF7OS8AUv/9sNPfKv60pY5o0SOp7KtFah7dAySHsmrsFGlAMkmAKFL6cmwHJJ7R5gZSIzJf90WEVFbbeiAc/EdARAQYiRST+gptcYv6BSph2/+uOkerKZN1pTNHASJa2JCDFhvY1Rs7RX4DCVFQALGl5f8xTqpRKh6qSu51GwNid9kzICbMBGAQRcuigIiWKJXU+RuAJGV2FYhJ5KMrkYuAuIoWi1owiihwc8LQ6nq5t93mfLTrQAAwibQBBwwT5gyiv9aMej9HGwNiB/SVYk+AiASS3xMAyZYLiFpSIWQbnCtSxtaxAyr2ewLEBKJEXpoYEBB4AJD+p7s5j+7adkAczPYMCAiAOIO49yu2Kg6I6Ki1428A4kC2J0CkCtpAuDcRICYVkrbcejCiXA5mcwCpxTxNn+9WiqrUBoPQPdEeR48ZvUoakEzq3kSAuJcytty+iM4ZIRsBIlXsLplIn2dAhGNaAETJHtRetNmBeMm2CoKJ8oEUAsRnUSLKBcz/L0K2hn8AvD0HH9xMLTkAAAAASUVORK5CYII="

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75a127e8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75a127e8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\comment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75a127e8", Component.options)
  } else {
    hotAPI.reload("data-v-75a127e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(27);

//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            winHeight: 0,
            id: '',
            comments: [],
            loading: false,
            bottomLoading: true
        };
    },
    mounted: function mounted() {
        this.id = this.$root.$mp.query.id;
        this.getSystemInfo();
        this.getShortComment();
    },

    methods: {
        getShortComment: function getShortComment() {
            var _this = this;

            this.loading = 'loading';
            Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["f" /* getShortComment */])(this.id).then(function (res) {
                if (res && res.comments.length > 0) {
                    _this.loading = false;
                    res.comments.forEach(function (item) {
                        // console.log(item.time)
                        // console.log(new Date().getTime())
                        item.time = Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* formatTime */])(item.time);
                        item.avatar = item.avatar || __webpack_require__(145);
                    });
                    _this.comments = res.comments;
                    // console.log(this.comments)
                } else {
                    _this.loading = 'nothing';
                }
            }).catch(function () {
                _this.loading = 'error';
            });
        },
        getShortCommentMore: function getShortCommentMore() {
            var _this2 = this;

            if (this.bottomLoading !== 'nothing' && this.bottomLoading !== 'error') {
                this.bottomLoading = 'loading';
                var lastId = this.comments[this.comments.length - 1].id;
                Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["g" /* getShortCommentMore */])(this.id, lastId).then(function (res) {
                    // console.log(123)
                    if (res && res.comments.length > 0) {
                        var _comments;

                        _this2.bottomLoading = true;
                        res.comments.forEach(function (item) {
                            item.time = Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* formatTime */])(item.time);
                        });
                        (_comments = _this2.comments).push.apply(_comments, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.comments));
                    } else {
                        _this2.bottomLoading = 'nothing';
                    }
                }).catch(function () {
                    _this2.bottomLoading = 'error';
                });
            }
        },

        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo: function getSystemInfo() {
            var _this3 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    _this3.winHeight = res.windowHeight;
                }
            });
        }
    }
});

/***/ })

},[70]);
//# sourceMappingURL=main.js.map