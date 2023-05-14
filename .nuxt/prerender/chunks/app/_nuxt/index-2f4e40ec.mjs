import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, ref, mergeProps, unref, withCtx, createVNode } from 'file://E:/Freelancer/Demo/demo/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs } from 'file://E:/Freelancer/Demo/demo/node_modules/vue/server-renderer/index.mjs';
import { PopoverGroup, Dialog, DialogPanel } from 'file://E:/Freelancer/Demo/demo/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import { Bars3Icon, XMarkIcon } from 'file://E:/Freelancer/Demo/demo/node_modules/@heroicons/vue/24/outline/esm/index.js';
import { _ as _export_sfc } from '../server.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/h3/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/ofetch/dist/node.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/destr/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/hookable/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/scule/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/klona/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/defu/dist/defu.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/ohash/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/unstorage/drivers/fs.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/radix3/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/unctx/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/unhead/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/Freelancer/Demo/demo/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0$1 = "" + buildAssetsURL("logo.3b21424a.svg");
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><nav class="mx-auto flex max-w-7xl items-center justify-between py-[30px]" aria-label="Global"><div class="flex items-center"><a href="#" class="h-[20px] hidden lg:flex mr-10"><span class="sr-only">Your Company</span><img class="text-sm w-auto"${ssrRenderAttr("src", _imports_0$1)} alt=""></a>`);
      _push(ssrRenderComponent(unref(PopoverGroup), { class: "hidden lg:flex lg:gap-x-9" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="#" class="text-lg font-medium leading-6 text-maketer"${_scopeId}>Home</a><a href="#" class="text-lg font-medium leading-6 text-gray-900"${_scopeId}>Job</a><a href="#" class="text-lg font-medium leading-6 text-gray-900"${_scopeId}>Hiring</a><a href="#" class="text-lg font-medium leading-6 text-gray-900"${_scopeId}>About</a>`);
          } else {
            return [
              createVNode("a", {
                href: "#",
                class: "text-lg font-medium leading-6 text-maketer"
              }, "Home"),
              createVNode("a", {
                href: "#",
                class: "text-lg font-medium leading-6 text-gray-900"
              }, "Job"),
              createVNode("a", {
                href: "#",
                class: "text-lg font-medium leading-6 text-gray-900"
              }, "Hiring"),
              createVNode("a", {
                href: "#",
                class: "text-lg font-medium leading-6 text-gray-900"
              }, "About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<label class="relative hidden lg:block ml-9"><span class="absolute inset-y-0 left-0 flex items-center pl-2"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjcgMTQuNjY2N0wxMy4zMzMzIDEzLjMzMzRNNy42NjY2OCAxNEM4LjQ5ODM4IDE0IDkuMzIxOTQgMTMuODM2MiAxMC4wOTAzIDEzLjUxNzlDMTAuODU4NyAxMy4xOTk3IDExLjU1NjkgMTIuNzMzMiAxMi4xNDUgMTIuMTQ1QzEyLjczMzEgMTEuNTU2OSAxMy4xOTk2IDEwLjg1ODggMTMuNTE3OSAxMC4wOTA0QzEzLjgzNjIgOS4zMjE5NyAxNCA4LjQ5ODQxIDE0IDcuNjY2NzFDMTQgNi44MzUgMTMuODM2MiA2LjAxMTQ0IDEzLjUxNzkgNS4yNDMwNUMxMy4xOTk2IDQuNDc0NjUgMTIuNzMzMSAzLjc3NjQ3IDEyLjE0NSAzLjE4ODM2QzExLjU1NjkgMi42MDAyNiAxMC44NTg3IDIuMTMzNzUgMTAuMDkwMyAxLjgxNTQ3QzkuMzIxOTQgMS40OTcxOSA4LjQ5ODM4IDEuMzMzMzcgNy42NjY2OCAxLjMzMzM3QzUuOTg2OTcgMS4zMzMzNyA0LjM3NjA2IDIuMDAwNjMgMy4xODgzMyAzLjE4ODM2QzIuMDAwNiA0LjM3NjA5IDEuMzMzMzQgNS45ODcgMS4zMzMzNCA3LjY2NjcxQzEuMzMzMzQgOS4zNDY0MSAyLjAwMDYgMTAuOTU3MyAzLjE4ODMzIDEyLjE0NUM0LjM3NjA2IDEzLjMzMjggNS45ODY5NyAxNCA3LjY2NjY4IDE0WiIgc3Ryb2tlPSIjRDlEOUQ5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="" class="ml-4 mr-3"></span><input placeholder="Find Marketer" type="text" name="search" class="placeholder:text-nero-base bg-white w-full lg:w-[180px] border border-nero-light rounded-full py-3 pl-12 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"></label></div><div class="flex lg:hidden"><button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 mr-4"><span class="sr-only">Open main menu</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:justify-end"><button class="btn-primary">Login</button><button class="btn-white lg:ml-3.5">Register</button></div></nav>`);
      _push(ssrRenderComponent(unref(Dialog), {
        as: "div",
        class: "lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-10"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><a href="#" class="-m-1.5 p-1.5"${_scopeId2}><span class="sr-only"${_scopeId2}>Your Company</span><img class="h-8 w-auto"${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"${_scopeId2}><span class="sr-only"${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root"${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10"${_scopeId2}><div class="space-y-2 py-6"${_scopeId2}><a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"${_scopeId2}>Features</a><a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"${_scopeId2}>Marketplace</a><a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"${_scopeId2}>Company</a></div><div class="py-6 flex justify-around"${_scopeId2}><button class="btn-primary"${_scopeId2}>Login</button><button class="btn-white lg:ml-3.5"${_scopeId2}>Register</button></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Your Company"),
                        createVNode("img", {
                          class: "h-8 w-auto",
                          src: _imports_0$1,
                          alt: ""
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }, [
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Features"),
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Marketplace"),
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                          }, "Company")
                        ]),
                        createVNode("div", { class: "py-6 flex justify-around" }, [
                          createVNode("button", { class: "btn-primary" }, "Login"),
                          createVNode("button", { class: "btn-white lg:ml-3.5" }, "Register")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-10" }),
              createVNode(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Your Company"),
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: _imports_0$1,
                        alt: ""
                      })
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "space-y-2 py-6" }, [
                        createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Features"),
                        createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Marketplace"),
                        createVNode("a", {
                          href: "#",
                          class: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                        }, "Company")
                      ]),
                      createVNode("div", { class: "py-6 flex justify-around" }, [
                        createVNode("button", { class: "btn-primary" }, "Login"),
                        createVNode("button", { class: "btn-white lg:ml-3.5" }, "Register")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _imports_0 = "" + buildAssetsURL("argency.aab0e6de.svg");
const _imports_1 = "" + buildAssetsURL("service-img-left.fb07e9e4.svg");
const _imports_2 = "" + buildAssetsURL("long-arrow.e7bcb4b6.svg");
const _imports_3 = "" + buildAssetsURL("ellipse-left.9469fc00.svg");
const _imports_4 = "" + buildAssetsURL("rectangle-left.dead8c66.svg");
const _imports_5 = "" + buildAssetsURL("ellipse-right.d3fd0ca9.svg");
const _imports_6 = "" + buildAssetsURL("rectangle-right.f046a437.svg");
const _imports_7 = "" + buildAssetsURL("service-img-right.febaec91.svg");
const _imports_8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAlCAYAAADFsuJGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmKSURBVHgB7VtNcts2FH6g5cTtprpBmYkdO+qi6glKn6DKsisrJ6i9z4ylEzQ+gZUT2DlB6BPEm6ZO7IzZE1TZpY5M9D3ykQJAkATtxE5kfjMYgcAjSIIf3x8ggBYtbhECronRaBTgz29Y+lx+wbbIIrfP/dT3Eo8n0OLO48oERAJ18YdINTC69rBv25D18efckIuwPMG+Y2hxZ+HB1fEKiuQjbFnati1tPpbXrEFb3FFciYDj8XgXUnNqQ9dCql+hHPusTVvcQTQmIJFFSjmqksH+vioP5WQl+Cg/hBZ3ElfRgEGdgBBClek3lG9xh1BKQNRc/d3d3YLvhtrKh3r8rNSDhvLZ9X009X9Ai4WGlYActR6gZtolIkJz+Ipf5zvITy1t+0j25+xvtlhQlGlAinB9LESiAzVIQFJOwQGdTucHrv7oIK6NyaQLqE7+ZhspLy4KBOSX7ytNVFe1UAgOmM1mD5Tz63CUVYhsliBnH1osJAoELIlIt5GYSX6PVzkiqIfPvy4plpDHpnNsZCOTPoQWC4eOesAv2bcJkj+G/UdMwBega8Uq1BEwwjFDrpvaVwV9ABNogLWN3lDG6XhSxtH705NJmazv97udexd50CXkp8PT01Ntlebho8cDASL3ic/evRlBBVYf9fJ+CfL4/bu/D6HBPdvuwXavdWOr9102pu36hOwZzWs6Qcjp2du/n6tNqxsbAcRekB13jFOqAo5s6W0TCw1aR0DfMcFMZM7IP6yQaxwMSSm2cBICqqPvGkIVgVc+dkF6+TPFcjnCH/NFDXDxUl3pGUEVxHyOPCkm+FNJwNXVDXQ/cI55gVSKDiXwN025KDqerq73KEOQzK8HIqocW4g/gT/ssjEJRDIpL/LrC6nMlzE/LhDpfWkETMinzotxTh1hAkrNIFkoaAihHi4EnLDprXu4hV8tkR3PWMYUQaIxbLL84XLdL5NbW1vrC82qiL7v+9a5XF65GKjHMciX8IVhErA2wuXUjI/VMVwfEzbpVab3TsDf2PBR4wwLHVJYc6FCxLrGU8ya3rw8NJq6S8vf29bw0WIku5oyTKvMOpr9CO8irCyyXkmZJjjEUpf8TUwxEmeTfbcAro6xg+kF5d4WFktQZt7EgDRWFEWacjg7OQkfrveiXLuJhDwjywC/FUb0ZJk/HeQystpdgFiMz07/msA1YWrAENwi3IBzc9fRghNINa6rX/ECFhTke6G2CPIGEWvz2rn3vdX5R5Koc9J/8OCxlnMtmt/8zIIZpkAFFDdHevGNzLdGQPbtnoIbKCAhJz2Eq2GM5py0re8gO1nkDazke6lEmaUf51wDCfjD6rd5cageLi0L7d0Z5lfVoEUz7IlcU5J5JQ0LN4AO71Q+yl4wmVUs9CB1yV8f0n1+JHsOzZB84XW7ahj0InayA9a8u7jSMnz27Nk/4Ahy1NfWesPS/pnsoh28FcQSdrOdwRR5Rm9PIgwq9lANZSTpdu5/NwQjoiSSrK7/FOLdB3yyue0tJxWZVCmEn8kWzLCigTFiD6EGdP7ao551m93puzeuSizRgPSQ5NOdZ8leJuMTqDfHmb9YMMVIrqltaz6P6ZLGIdDuato1TWP5/LHQMmGAKy2b0ACYEvClh+vLJQWWklTFjYPybpqZlJ/26CfVQCoRxJZ1ACmPFJkg05Sm+U1Mqi6bm2FK/xRkayECKWBoK9AAREB10wAR8YBfNmkeeslRxfl0LhGJCKU5yRVrxkTWPlQHHlMk8A5t7adcIi8PvgZo9nDfApJc5fwoVJPEmDzfU0T7tlTL7OKephVZUyKJOrlsZlIN2dwMq+mfmzS/BCKgSRS6qXPWNqQNaU23KtgYQkqoHaN9avwSDlm7Vpn3EMsvSLrnvB3rnE11t2T8bxaUesnNJ0LGUtM8nAaZP6cUBatBSWldU7LZlUpOMYaXNlk2w43NL99MSO6CrUADUBqGvrjA0jfEMiAiYPJ5xMTJdsmY2OW0zJYylkrAjDw7Fct9pPXGdD3y80gTqzurLYigEWSIy0KlZpvI0JFetS9raHVbeqQMsZQfzDYz9SI8sbW6/thMRkPiwab1JDFd1FDxS+rLZNZ6vb68nM+dB7NJiWw/XaYrugB1kLF4cXb6ZgLXBGnAo4r+Lm+HohcTsDYkBzMy5LK0DPWZmi/7HStJZxP00A/QbJOGJJJTqSTfbfybTiTJ1zk6Kyul90h+lXaup8+ZPfFMxDCL1DS/vBQD81qz/+5P1OP4Uh7k8njPqlk3ZLs45/tlsjcBImDBf7PAh9Q/JD8shNQ3NM0yacGItBgdYJT6L7dHkBJmZNF+2VgjTsnQ+AHU43ZygkLqL8diEvMuc1nNOLcjl66025u0pJmSKZhWEP68DntVsqC4NqbsTcCjCDMjjQPoiydtSBM/wUIaMSNDogXJhGI9VFIkZHoy05e9sIjayGxDOgGvS/w8GxIywy2ATJ/UtCCaxPXHBxRxZi2Y6uk/3Ojtq9rN5thjm6LJJC1bjcuK1InRtSemY+u67UzIw+vJflkkS3Hsd9EkbjmeN4RUUyVLaUwIKkSwENIUToZtTqMM+fgp+ZMcab+CZkt5EZTs5LgxSAy2BBzMG8RAesuD1fUedyc5Nx2x/oEnW56kYgmEHKN/GkIFMN/38zzfl6S/Rmo/mdbO/Quaf/UjPo5OTiJzLJY1005W2TKgS7GPz1yXK6ZVnc2qqDpfCWGCNFla84HTNsr5T7k+VcbN6sfkQxL5lLRKAO4IIdWaEdwikshUNJgnlDX3IVLiOau7pz00rdV9aCTV2bRqZl7GsdWkWsxwqeyXhrkUN4K5WXV1RpO0DZGqihwUNJCWJT+ygbnNtn1tcpQdwVeAs5M36LPGT6URlOhAs5p8/fqmVTPpa2rHMnDwkH/YeQpFhbjUxrpcKl8mFUJP+VTJfkmIOgHeeuWEOoLwBlUX4sHnIFvirK+s5NerMzFpXo7x8ePUJcVCKY94Jn0heBczpmo+QRyWXavpPTU9V32GJs/rch/a/LjCmEfzGQoE5HSKD3q0Sv9wU4mjEimr7/DqSSlG5f/5iJQ63ewHS9+hatpbLAbKCPgK3BFBGliELsJMwhG4BzyECW+QaLFgKOz/CMMwCgJyU5wCBHJcf0dynIAjcPwplkO8BqVpKPKuM8kRlid4zkdosXAo9QE5IClLtIaQmtxrZc3ZJ9yuuA6N/+RrCT5afH5UBiFsLilfFHATEWLsam5doZjlXyH1PSMsL24r4dyiRYs7gv8Bo9aIag6Uqn8AAAAASUVORK5CYII=";
const _imports_9 = "data:image/png;base64,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";
const _imports_10 = "data:image/png;base64,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";
const _imports_11 = "data:image/png;base64,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";
const _imports_12 = "" + buildAssetsURL("Tencent.db209568.png");
const _imports_13 = "" + buildAssetsURL("_Google.33510df0.svg");
const _imports_14 = "" + buildAssetsURL("_Instagram.c08f4703.svg");
const _imports_15 = "" + buildAssetsURL("arrowcircledown.70034e24.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<!--[--><div class="w-full min-h-screen xl:px-[100px] lg:px-[50px] px-[20px] font-general max-w-screen-2xl m-auto">`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="section1 lg:mt-[30px] flex"><div class="flex-1 w-[60%]"><div class="text-maketer font-semibold text-[50px]"> Hire fast marketer person <span class="text-black">with maketer.</span></div><div class="flex mt-10"><button class="btn-white">Getting Started</button><a href="#" class="text-sm font-semibold leading-6 text-gray-900 flex items-center ml-7 hover:text-maketer hover:fill-maketer">Explore Now<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[11.5px]"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="arrow right"></div></div></div><div class="flex w-[40%] z-10"><img class="text-sm w-[285.81px] h-[268px]"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="section2 mt-[50px] xl:flex justify-between"><div class="w-full xl:w-[793px] h-[334px] flex relative flex-initial"><div class="w-full h-full flex flex-col justify-between p-[24px]"><div class="flex"><img class="text-sm w-[129px] h-[151px] flex-none"${ssrRenderAttr("src", _imports_1)} alt=""><div class="flex-col ml-[28px] h-[151px] flex justify-between" style="${ssrRenderStyle({ "color": "#101010" })}"><p alt="title" class="text-2xl font-semibold">Main Services</p><div class="flex items-center"><div class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]" alt="count"> 1 </div><div class="text-[14px] text-[#101010] ml-[12px] font-medium" alt="content"> Find marketer </div></div><div class="flex items-center"><div class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]" alt="count"> 2 </div><div class="text-[14px] text-[#101010] ml-[12px] font-medium" alt="content"> Find marketing job </div></div><div class="flex items-center"><div class="w-[26px] h-[26px] bg-[#FFD600] flex items-center justify-center rounded-[8px]" alt="count"> 3 </div><div class="text-[14px] text-[#101010] ml-[12px] font-medium" alt="content"> Latest news digital marketing </div></div></div><div class="ml-[48px] h-[151px] hidden md:flex items-center"><img class="w-[100px] flex-none"${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div class="w-full h-[104px] bg-[#101010] rounded-[20px] flex flex-wrap justify-around items-center"><div class="flex flex-col" alt="content"><span class="font-bold text-white text-[28px]">16+</span><span class="font-medium text-white text-[12px]">Countries</span></div><div class="flex flex-col" alt="content"><span class="font-bold text-white text-[28px]">50k+</span><span class="font-medium text-white text-[12px]">Active User</span></div><div class="flex flex-col" alt="content"><span class="font-bold text-white text-[28px]">10+</span><span class="font-medium text-white text-[12px]">Top Companies</span></div><div class="flex flex-col" alt="content"><span class="font-bold text-white text-[28px]">10k+</span><span class="font-medium text-white text-[12px]">Marketer Hired</span></div></div></div><div class="bg-[#00e56f] w-[100%] xl:w-[90%] rounded-[30px] xl:rounded-br-none h-[100%] absolute -z-10"></div><div class="bg-[#00e56f] w-[100%] rounded-r-[30px] rounded-b-[30px] h-[75%] absolute right-0 bottom-0 -z-10"></div><img class="hidden xl:block w-[109px] h-[109px] absolute top-[55px] right-[70px] z-10"${ssrRenderAttr("src", _imports_3)} alt=""><img class="hidden xl:block absolute h-[280px] w-[280px] -top-[100px] -right-[85px] -z-1 overflow-hidden"${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="flex flex-initial w-full xl:w-[266px] h-[334px] mt-[100px] xl:mt-0 rounded-[30px] z-10 relative" style="${ssrRenderStyle({ "background": "url(.png),\r\n            radial-gradient(\r\n              55.49% 55.49% at 50% 44.51%,\r\n              #ffa238 0%,\r\n              #ffd600 100%\r\n            )" })}"><img class="w-[109px] h-[109px] absolute -top-[54px] left-[36px] z-10"${ssrRenderAttr("src", _imports_5)} alt=""><img class="absolute h-[152px] w-[152px] -top-[76px] left-[14px] -z-1"${ssrRenderAttr("src", _imports_6)} alt=""><img class="absolute h-full w-full -top-[0px] left-[0px] -z-10"${ssrRenderAttr("src", _imports_7)} alt=""><span class="absolute left-[28px] font-semibold text-[32px] top-[105px]">10+ years</span><span class="absolute left-[28px] top-[144px] font-medium">Maketer founded</span></div></div><div class="section3 flex items-center flex-wrap justify-around xl:justify-between mt-[44px]"><img class="h-full w-[160px] m-[20px]"${ssrRenderAttr("src", _imports_8)} alt=""><img class="h-full w-[130px] m-[20px]"${ssrRenderAttr("src", _imports_9)} alt=""><img class="h-full w-[180px] m-[20px]"${ssrRenderAttr("src", _imports_10)} alt=""><img class="h-full w-[150px] m-[20px]"${ssrRenderAttr("src", _imports_11)} alt=""><img class="h-full w-[240px] m-[20px]"${ssrRenderAttr("src", _imports_12)} alt=""></div><div class="section4 mt-[110px] flex"><div alt="left" class="w-[45%] h-[400px] relative"><div class="absolute w-[292px] h-[191px] bg-white shadow shadow-blue-500/30 top-0 left-0 z-10 rounded-[18px] pt-[30px] pl-[24px]"><div class="text-[18px] font-medium">Marketing Experience</div><div class="flex mt-[10px]"><img${ssrRenderAttr("src", _imports_13)}><div class="ml-[16px]" alt="content"><p class="text-[18.67px] font-medium">Google.inc</p><p class="text-[14.67px] font-medium text-[#D9D9D9]"> Digital ads \u2317 2021 - 2022 </p></div></div><div class="flex mt-[10px]"><img${ssrRenderAttr("src", _imports_14)}><div class="ml-[16px]" alt="content"><p class="text-[18.67px] font-medium">Instagram</p><p class="text-[14.67px] font-medium text-[#D9D9D9]"> Branding Digital \u2317 2019 - 2021 </p></div></div></div><div class="absolute bg-[#FAFAFA] w-[432px] h-[355px] rounded-[24px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div><div class="absolute w-[365px] h-[239px] bg-white bottom-0 right-0 z-20 shadow shadow-blue-500/30 rounded-[18px] pl-[30px]"><p class="text-[24px] font-medium mt-[25px]">Skill &amp; Expertise</p><div class="flex flex-wrap gap-[12px]"><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Social media ads </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Campaign </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Motion </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Promotor </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Branding Campaign </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Digital Consultation </div><div class="bg-[#F2F2F2] rounded-[12px] p-[10px] leading-[20px] text-[14.6667px]"> Media Admin </div></div></div></div><div alt="right" class="w-[55%] pl-[65px]"><div class="font-medium text-[48px] leading-[64px]"> Streamline marketer with advanced features </div><div class="text-[18px] leading-[30px] font-medium text-[#B6B6B6]"> Our advanced feature saves you time and helps you find your dream marketer more efficiently, you can quickly search to find most relevant marketer. </div><div class="flex mt-[27.5px]"><img${ssrRenderAttr("src", _imports_15)}><span class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]">Search by our advance search engine</span></div><div class="flex mt-[23px]"><img${ssrRenderAttr("src", _imports_15)}><span class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]">Filter by your own personalized location</span></div><div class="flex mt-[23px] items-baseline max-w-[400px]"><img${ssrRenderAttr("src", _imports_15)}><span class="text-[18px] leading-[26px] font-medium ml-[9.33px] text-[#B6B6B6]">Refining marketing position with top marketer top experience.</span></div></div></div><div class="section5 mt-[110px] flex"><div alt="left" class="w-[45%] h-[385px] flex flex-col justify-center"><p class="font-medium text-[48px] leading-[64px] max-w-[436px]"> Available many jobs for marketing field </p><p class="text-[18px] leading-[30px] text-[#B6B6B6]"> you can find jobs for marketing worldwide with hybrid and remote type! Amazing! </p></div><div alt="left" class="w-[55%] h-[385px] relative"><div class="w-[432px] h-[355px] absolute top-0 left-0 bg-[#FAFAFA] rounded-[24px] z-0"></div><div class="w-[500px] h-[327px] absolute bottom-0 right-0 bg-white shadow shadow-blue-500/30 rounded-[24px] z-10 pt-[54.79px] pl-[41px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[50.68px] h-[50.68px]"><p class="text-[24.6575px] leading-[33px] font-medium mt-[20px]"> Senior Marketing Design </p><div class="flex items-center text-[16.44px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[6.85px] h-[6.85px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[16.4384px] leading-[22px] text-[#D0CFCF] mt-[10px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[22px] flex-wrap gap-[16px]"><div class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"> Digital </div><div class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"> Business </div><div class="py-[5.5px] px-[25px] bg-[#FAFAFA] text-[#D0CFCF] text-[16.4384px] font-medium rounded-[20.55px] leading-[22px]"> Marketing </div></div></div></div></div></div><div alt="footer" class="w-full h-[842px] mt-[110px] bg-[#FAFAFA] pt-[100px]"><div class="text-center text-[48px] leading-[64px]" alt="title"> 2000+ Job Openings </div><div class="text-center text-[18px] leading-[30px] text-[#B6B6B6] mt-[24px]"> Explore thousand of marketing job opportunities and find your dream <br> company with our comprehensive marketing job search platform </div><div class="h-[476px] w-full px-[100px] mt-[38px] flex flex-wrap gap-[30px]"><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div><div class="w-[340px] h-[222px] bg-white shadow shadow-blue-500/30 rounded-[16.77px] z-10 pt-[37.15px] pl-[27.95px]"><img${ssrRenderAttr("src", _imports_13)} class="w-[34.47px] h-[34.47px]"><p class="text-[16.7671px] leading-[23px] font-medium mt-[13px]"> Senior Marketing Design </p><div class="flex items-center text-[11.1781px] text-[#D9D9D9]"><div>Remote work</div><div class="bg-[#D9D9D9] w-[4.66px] h-[4.66px] rounded-full mx-2.5"></div><div>$1000 - $2000</div></div><p class="text-[11.1781px] leading-[15px] text-[#D0CFCF] mt-[8px]"> We are looking for talented marketing design to scale our business to worldwide country </p><div class="flex pt-[15px] flex-wrap gap-[11.18px]"><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Digital </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Business </div><div class="py-[3px] px-[17px] bg-[#FAFAFA] text-[#D0CFCF] text-[11.1781px] font-medium rounded-[13.9726px] leading-[15px]"> Marketing </div></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-2f4e40ec.mjs.map
