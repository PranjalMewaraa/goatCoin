"use client";
import {
  AcceleratedAnimation,
  FlatTree,
  GroupPlaybackControls,
  HTMLVisualElement,
  LayoutGroupContext,
  LazyContext,
  MotionConfigContext,
  MotionContext,
  MotionGlobalConfig,
  MotionValue,
  PresenceContext,
  SVGVisualElement,
  SwitchLayoutGroupContext,
  VisualElement,
  acceleratedValues,
  addDomEvent,
  addPointerEvent,
  addPointerInfo,
  addScaleCorrector,
  addUniqueItem,
  animateSingleValue,
  animateTarget,
  animateValue,
  animateVisualElement,
  animations,
  anticipate,
  attachTimeline,
  backIn,
  backInOut,
  backOut,
  browserNumberValueTypes,
  buildTransform,
  calcGeneratorDuration,
  calcLength,
  camelToDash,
  cancelFrame,
  circIn,
  circInOut,
  circOut,
  clamp,
  collectMotionValues,
  color,
  complex,
  createBox,
  createDomVisualElement,
  createMotionComponent,
  createMotionComponentFactory,
  createRendererMotionComponent,
  cubicBezier,
  defaultOffset,
  delay,
  distance,
  distance2D,
  drag,
  easeIn,
  easeInOut,
  easeOut,
  easingDefinitionToFunction,
  fillOffset,
  filterProps,
  findSpring,
  frame,
  frameData,
  frameSteps,
  gestureAnimations,
  getFinalKeyframe,
  getOptimisedAppearId,
  getValueTransition,
  hasReducedMotionListener,
  inertia,
  initPrefersReducedMotion,
  instantAnimationState,
  interpolate,
  invariant,
  isBrowser,
  isDragActive,
  isEasingArray,
  isGenerator,
  isMotionValue,
  isSVGElement,
  isValidMotionProp,
  keyframes,
  layout,
  loadExternalIsValidProp,
  loadFeatures,
  makeUseVisualState,
  maxGeneratorDuration,
  memo,
  millisecondsToSeconds,
  mirrorEasing,
  mix,
  mixNumber,
  motionComponentSymbol,
  motionValue,
  moveItem,
  noop,
  optimizedAppearDataAttribute,
  optimizedAppearDataId,
  pipe,
  prefersReducedMotion,
  progress,
  px,
  removeItem,
  require_jsx_runtime,
  resolveMotionValue,
  reverseEasing,
  rootProjectionNode,
  secondsToMilliseconds,
  setTarget,
  spring,
  startWaapiAnimation,
  stepsOrder,
  supportsLinearEasing,
  supportsScrollTimeline,
  supportsWaapi,
  transformProps,
  useConstant,
  useIsPresent,
  useIsomorphicLayoutEffect,
  usePresence,
  velocityPerSecond,
  visualElementStore,
  warnOnce,
  warning
} from "./chunk-TI62X66J.js";
import "./chunk-BLPKUIA4.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __export,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createDOMMotionComponentProxy(componentFactory) {
  if (typeof Proxy === "undefined") {
    return componentFactory;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const deprecatedFactoryFunction = (...args) => {
    if (true) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return componentFactory(...args);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return componentFactory;
      if (!componentCache.has(key)) {
        componentCache.set(key, componentFactory(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = createDOMMotionComponentProxy(createMotionComponent);

// node_modules/framer-motion/dist/es/render/components/m/create.mjs
var createMinimalMotionComponent = createMotionComponentFactory();

// node_modules/framer-motion/dist/es/render/components/m/proxy.mjs
var m = createDOMMotionComponentProxy(createMinimalMotionComponent);

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var React2 = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var PopChildMeasure = class extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent }) {
  const id2 = (0, import_react.useId)();
  const ref = (0, import_react.useRef)(null);
  const size = (0, import_react.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const { nonce } = (0, import_react.useContext)(MotionConfigContext);
  (0, import_react.useInsertionEffect)(() => {
    const { width, height, top, left } = size.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id2;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent]);
  return (0, import_jsx_runtime.jsx)(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, children: React.cloneElement(children, { ref }) });
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id2 = (0, import_react2.useId)();
  const memoizedOnExitComplete = (0, import_react2.useCallback)((childId) => {
    presenceChildren.set(childId, true);
    for (const isComplete of presenceChildren.values()) {
      if (!isComplete)
        return;
    }
    onExitComplete && onExitComplete();
  }, [presenceChildren, onExitComplete]);
  const context = (0, import_react2.useMemo)(
    () => ({
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: memoizedOnExitComplete,
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
  );
  (0, import_react2.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  React2.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = (0, import_jsx_runtime2.jsx)(PopChild, { isPresent, children });
  }
  return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var import_react3 = __toESM(require_react(), 1);
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  import_react3.Children.forEach(children, (child) => {
    if ((0, import_react3.isValidElement)(child))
      filtered.push(child);
  });
  return filtered;
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var AnimatePresence = ({ children, exitBeforeEnter, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync" }) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const presentChildren = (0, import_react4.useMemo)(() => onlyElements(children), [children]);
  const presentKeys = presentChildren.map(getChildKey);
  const isInitialRender = (0, import_react4.useRef)(true);
  const pendingPresentChildren = (0, import_react4.useRef)(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = (0, import_react4.useState)(presentChildren);
  const [renderedChildren, setRenderedChildren] = (0, import_react4.useState)(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return;
  }
  if (mode === "wait" && renderedChildren.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const { forceRender } = (0, import_react4.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender === null || forceRender === void 0 ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        onExitComplete && onExitComplete();
      }
    };
    return (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom: isPresent ? void 0 : custom, presenceAffectsLayout, mode, onExitComplete: isPresent ? void 0 : onExit, children: child }, key);
  }) });
};

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
function MotionConfig({ children, isValidProp, ...config }) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = { ...(0, import_react5.useContext)(MotionConfigContext), ...config };
  config.isStatic = useConstant(() => config.isStatic);
  const context = (0, import_react5.useMemo)(() => config, [
    JSON.stringify(config.transition),
    config.transformPagePoint,
    config.reducedMotion
  ]);
  return (0, import_jsx_runtime4.jsx)(MotionConfigContext.Provider, { value: context, children });
}

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
function LazyMotion({ children, features, strict = false }) {
  const [, setIsLoaded] = (0, import_react6.useState)(!isLazyBundle(features));
  const loadedRenderer = (0, import_react6.useRef)(void 0);
  if (!isLazyBundle(features)) {
    const { renderer, ...loadedFeatures } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  (0, import_react6.useEffect)(() => {
    if (isLazyBundle(features)) {
      features().then(({ renderer, ...loadedFeatures }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return (0, import_jsx_runtime5.jsx)(LazyContext.Provider, { value: { renderer: loadedRenderer.current, strict }, children });
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react7 = __toESM(require_react(), 1);
var DeprecatedLayoutGroupContext = (0, import_react7.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react8 = __toESM(require_react(), 1);
function useIsMounted() {
  const isMounted = (0, import_react8.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react9.useState)(0);
  const forceRender = (0, import_react9.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react9.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = (node) => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */ new Set();
  const subscriptions = /* @__PURE__ */ new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: (node) => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: (node) => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var shouldInheritGroup = (inherit) => inherit === true;
var shouldInheritId = (inherit) => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({ children, id: id2, inherit = true }) => {
  const layoutGroupContext = (0, import_react10.useContext)(LayoutGroupContext);
  const deprecatedLayoutGroupContext = (0, import_react10.useContext)(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = (0, import_react10.useRef)(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id2 = id2 ? upstreamId + "-" + id2 : upstreamId;
    }
    context.current = {
      id: id2,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = (0, import_react10.useMemo)(() => ({ ...context.current, forceRender }), [key]);
  return (0, import_jsx_runtime6.jsx)(LayoutGroupContext.Provider, { value: memoizedContext, children });
};

// node_modules/framer-motion/dist/es/render/dom/features-min.mjs
var domMin = {
  renderer: createDomVisualElement,
  ...animations
};

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react11 = __toESM(require_react(), 1);
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = (0, import_react11.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react11.useState)(initial);
    (0, import_react11.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = (v) => {
  return v && typeof v === "object" && v.mix;
};
var getMixer = (v) => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react12 = __toESM(require_react(), 1);
function toNumber(v) {
  if (typeof v === "number")
    return v;
  return parseFloat(v);
}
function useSpring(source, config = {}) {
  const { isStatic } = (0, import_react12.useContext)(MotionConfigContext);
  const activeSpringAnimation = (0, import_react12.useRef)(null);
  const value = useMotionValue(isMotionValue(source) ? toNumber(source.get()) : source);
  const latestValue = (0, import_react12.useRef)(value.get());
  const latestSetter = (0, import_react12.useRef)(() => {
  });
  const startAnimation = () => {
    const animation = activeSpringAnimation.current;
    if (animation && animation.time === 0) {
      animation.sample(frameData.delta);
    }
    stopAnimation2();
    activeSpringAnimation.current = animateValue({
      keyframes: [value.get(), latestValue.current],
      velocity: value.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...config,
      onUpdate: latestSetter.current
    });
  };
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  (0, import_react12.useInsertionEffect)(() => {
    return value.attach((v, set) => {
      if (isStatic)
        return set(v);
      latestValue.current = v;
      latestSetter.current = set;
      frame.update(startAnimation);
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", (v) => value.set(toNumber(v)));
    }
  }, [value]);
  return value;
}

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react13 = __toESM(require_react(), 1);
function useMotionValueEvent(value, event, callback) {
  (0, import_react13.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}

// node_modules/framer-motion/dist/es/value/use-velocity.mjs
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  const updateVelocity = () => {
    const latest = value.getVelocity();
    velocity.set(latest);
    if (latest)
      frame.update(updateVelocity);
  };
  useMotionValueEvent(value, "change", () => {
    frame.update(updateVelocity, false, true);
  });
  return velocity;
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
function resolveElements(elements, scope, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    let root = document;
    if (scope) {
      invariant(Boolean(scope.current), "Scope provided, but no element detected.");
      root = scope.current;
    }
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = root.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = root.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const { inlineSize, blockSize } = borderBoxSize[0];
    return { width: inlineSize, height: blockSize };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/index.mjs
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var maxElapsed = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element[`scroll${position}`];
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
  const inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const { x, y } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber;
    } else if (edge.endsWith("%")) {
      edge = asNumber / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset2 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = { x: 0, y: 0 };
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
  const { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition));
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
  if (true) {
    if (container && target && target !== container) {
      warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
    }
  }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: () => measure(element, options.target, info),
    update: (time) => {
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers)
        handler.measure();
    };
    const updateAll = () => {
      for (const handler of containerHandlers) {
        handler.update(frameData.timestamp);
      }
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers)
        handler.notify();
    };
    const listener2 = () => {
      frame.read(measureAll, false, true);
      frame.read(updateAll, false, true);
      frame.update(notifyAll2, false, true);
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, { passive: true });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, { passive: true });
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers)
      return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size)
      return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const { currentTime } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.update(onFrame, true);
  return () => cancelFrame(onFrame);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scrollTimelineFallback({ source, container, axis = "y" }) {
  if (source)
    container = source;
  const currentTime = { value: 0 };
  const cancel = scrollInfo((info) => {
    currentTime.value = info[axis].progress * 100;
  }, { container, axis });
  return { currentTime, cancel };
}
var timelineCache = /* @__PURE__ */ new Map();
function getTimeline({ source, container = document.documentElement, axis = "y" } = {}) {
  if (source)
    container = source;
  if (!timelineCache.has(container)) {
    timelineCache.set(container, {});
  }
  const elementCache = timelineCache.get(container);
  if (!elementCache[axis]) {
    elementCache[axis] = supportsScrollTimeline() ? new ScrollTimeline({ source: container, axis }) : scrollTimelineFallback({ source: container, axis });
  }
  return elementCache[axis];
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function needsElementTracking(options) {
  return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) {
    return scrollInfo((info) => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scrollAnimation(animation, options) {
  animation.flatten();
  if (needsElementTracking(options)) {
    animation.pause();
    return scrollInfo((info) => {
      animation.time = animation.duration * info[options.axis].progress;
    }, options);
  } else {
    const timeline = getTimeline(options);
    if (animation.attachTimeline) {
      return animation.attachTimeline(timeline, (valueAnimation) => {
        valueAnimation.pause();
        return observeTimeline((progress2) => {
          valueAnimation.time = valueAnimation.duration * progress2;
        }, timeline);
      });
    } else {
      return noop;
    }
  }
}
function scroll(onScroll, { axis = "y", ...options } = {}) {
  const optionsWithDefaults = { axis, ...options };
  return typeof onScroll === "function" ? scrollFunction(onScroll, optionsWithDefaults) : scrollAnimation(onScroll, optionsWithDefaults);
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
function refWarning(name, ref) {
  warning(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : import_react14.useEffect;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scroll((_progress, { x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, [container, target, JSON.stringify(options.offset)]);
  return values;
}

// node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (true) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({ container: ref });
}

// node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (true) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react15 = __toESM(require_react(), 1);
function useAnimationFrame(callback) {
  const initialTimestamp = (0, import_react15.useRef)(0);
  const { isStatic } = (0, import_react15.useContext)(MotionConfigContext);
  (0, import_react15.useEffect)(() => {
    if (isStatic)
      return;
    const provideTimeSinceStart = ({ timestamp, delta }) => {
      if (!initialTimestamp.current)
        initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}

// node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time = useMotionValue(0);
  useAnimationFrame((t) => time.set(t));
  return time;
}

// node_modules/framer-motion/dist/es/value/use-will-change/get-will-change-name.mjs
function getWillChangeName(name) {
  if (transformProps.has(name)) {
    return "transform";
  } else if (acceleratedValues.has(name)) {
    return camelToDash(name);
  }
}

// node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.values = [];
  }
  add(name) {
    const styleName = getWillChangeName(name);
    if (styleName) {
      addUniqueItem(this.values, styleName);
      this.update();
    }
  }
  update() {
    this.set(this.values.length ? this.values.join(", ") : "auto");
  }
};

// node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react16 = __toESM(require_react(), 1);
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = (0, import_react16.useState)(prefersReducedMotion.current);
  if (true) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react17 = __toESM(require_react(), 1);
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const { reducedMotion } = (0, import_react17.useContext)(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function stopAnimation(visualElement) {
  visualElement.values.forEach((value) => value.stop());
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach((key) => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach((child) => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */ new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach((visualElement) => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach((visualElement) => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach((visualElement) => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react18 = __toESM(require_react(), 1);
function useUnmountEffect(callback) {
  return (0, import_react18.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale = 100, createGenerator) {
  const generator = createGenerator({ ...options, keyframes: [0, scale] });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => generator.next(duration * progress2).value / scale,
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function resolveSubjects(subject, keyframes2, scope, selectorCache) {
  if (typeof subject === "string" && isDOMKeyframes(keyframes2)) {
    return resolveElements(subject, scope, selectorCache);
  } else if (subject instanceof NodeList) {
    return Array.from(subject);
  } else if (Array.isArray(subject)) {
    return subject;
  } else {
    return [subject];
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null)
      return 1;
    if (b.value === null)
      return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const { delay: delay2 = 0, times = defaultOffset(valueKeyframesAsList), type = "keyframes", ...remainingTransition } = valueTransition;
      let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numSubjects) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      const createGenerator = isGenerator(type) ? type : generators === null || generators === void 0 ? void 0 : generators[type];
      if (numKeyframes <= 2 && createGenerator) {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = { ...remainingTransition };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
        ease = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      const targetTime = startTime + duration;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      addKeyframes(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
      maxDuration = Math.max(calculatedDelay + duration, maxDuration);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
      const numSubjects = subjects.length;
      for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const thisSubject = subjects[subjectIndex];
        const subjectSequence = getSubjectSequence(thisSubject, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition && transition[key] ? {
    ...transition,
    ...transition[key]
  } : { ...transition };
}
var isNumber = (keyframe) => typeof keyframe === "number";
var isNumberKeyframesArray = (keyframes2) => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs
function isObjectKey(key, object) {
  return key in object;
}
var ObjectVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.type = "object";
  }
  readValueFromInstance(instance, key) {
    if (isObjectKey(key, instance)) {
      const value = instance[key];
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
    }
    return void 0;
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  removeValueFromRenderState(key, renderState) {
    delete renderState.output[key];
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  build(renderState, latestValues) {
    Object.assign(renderState.output, latestValues);
  }
  renderInstance(instance, { output }) {
    Object.assign(instance, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createDOMVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
  node.mount(element);
  visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  };
  const node = new ObjectVisualElement(options);
  node.mount(subject);
  visualElementStore.set(subject, node);
}

// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function isSingleValue(subject, keyframes2) {
  return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
}
function animateSubject(subject, keyframes2, options, scope) {
  const animations2 = [];
  if (isSingleValue(subject, keyframes2)) {
    animations2.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
  } else {
    const subjects = resolveSubjects(subject, keyframes2, scope);
    const numSubjects = subjects.length;
    invariant(Boolean(numSubjects), "No valid elements provided.");
    for (let i = 0; i < numSubjects; i++) {
      const thisSubject = subjects[i];
      const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
      if (!visualElementStore.has(thisSubject)) {
        createVisualElement(thisSubject);
      }
      const visualElement = visualElementStore.get(thisSubject);
      const transition = { ...options };
      if ("delay" in transition && typeof transition.delay === "function") {
        transition.delay = transition.delay(i, numSubjects);
      }
      animations2.push(...animateTarget(visualElement, { ...keyframes2, transition }, {}));
    }
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope, { spring });
  animationDefinitions.forEach(({ keyframes: keyframes2, transition }, subject) => {
    animations2.push(...animateSubject(subject, keyframes2, transition));
  });
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animate/index.mjs
function isSequence(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}
function createScopedAnimate(scope) {
  function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
    let animations2 = [];
    if (isSequence(subjectOrSequence)) {
      animations2 = animateSequence(subjectOrSequence, optionsOrKeyframes, scope);
    } else {
      animations2 = animateSubject(subjectOrSequence, optionsOrKeyframes, options, scope);
    }
    const animation = new GroupPlaybackControls(animations2);
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
}
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    // Will be hydrated by React
    animations: []
  }));
  const animate2 = useConstant(() => createScopedAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach((animation) => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/style.mjs
function setCSSVar(element, name, value) {
  element.style.setProperty(`--${name}`, value);
}
function setStyle(element, name, value) {
  element.style[name] = value;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-partial-keyframes.mjs
var supportsPartialKeyframes = memo(() => {
  try {
    document.createElement("div").animate({ opacity: [1] });
  } catch (e) {
    return false;
  }
  return true;
});

// node_modules/framer-motion/dist/es/animation/animators/waapi/NativeAnimation.mjs
var state = /* @__PURE__ */ new WeakMap();
function hydrateKeyframes(valueName, keyframes2, read) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? read() : keyframes2[i - 1];
    }
    if (typeof keyframes2[i] === "number" && browserNumberValueTypes[valueName]) {
      keyframes2[i] = browserNumberValueTypes[valueName].transform(keyframes2[i]);
    }
  }
  if (!supportsPartialKeyframes() && keyframes2.length < 2) {
    keyframes2.unshift(read());
  }
}
var defaultEasing = "easeOut";
function getElementAnimationState(element) {
  const animationState = state.get(element) || /* @__PURE__ */ new Map();
  state.set(element, animationState);
  return state.get(element);
}
var NativeAnimation = class {
  constructor(element, valueName, valueKeyframes, options) {
    const isCSSVar = valueName.startsWith("--");
    this.setValue = isCSSVar ? setCSSVar : setStyle;
    this.options = options;
    this.updateFinishedPromise();
    invariant(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "framer-motion"?`);
    const existingAnimation = getElementAnimationState(element).get(valueName);
    existingAnimation && existingAnimation.stop();
    const readInitialKeyframe = () => {
      return valueName.startsWith("--") ? element.style.getPropertyValue(valueName) : window.getComputedStyle(element)[valueName];
    };
    if (!Array.isArray(valueKeyframes)) {
      valueKeyframes = [valueKeyframes];
    }
    hydrateKeyframes(valueName, valueKeyframes, readInitialKeyframe);
    if (isGenerator(options.type)) {
      const generatorOptions = createGeneratorEasing(options, 100, options.type);
      options.ease = supportsLinearEasing() ? generatorOptions.ease : defaultEasing;
      options.duration = secondsToMilliseconds(generatorOptions.duration);
      options.type = "keyframes";
    } else {
      options.ease = options.ease || defaultEasing;
    }
    this.removeAnimation = () => {
      var _a;
      return (_a = state.get(element)) === null || _a === void 0 ? void 0 : _a.delete(valueName);
    };
    const onFinish = () => {
      this.setValue(element, valueName, getFinalKeyframe(valueKeyframes, this.options));
      this.cancel();
      this.resolveFinishedPromise();
    };
    if (!supportsWaapi()) {
      onFinish();
    } else {
      this.animation = startWaapiAnimation(element, valueName, valueKeyframes, options);
      if (options.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = onFinish;
      if (this.pendingTimeline) {
        attachTimeline(this.animation, this.pendingTimeline);
      }
      getElementAnimationState(element).set(valueName, this);
    }
  }
  get duration() {
    return millisecondsToSeconds(this.options.duration || 300);
  }
  get time() {
    var _a;
    if (this.animation) {
      return millisecondsToSeconds(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
    }
    return 0;
  }
  set time(newTime) {
    if (this.animation) {
      this.animation.currentTime = secondsToMilliseconds(newTime);
    }
  }
  get speed() {
    return this.animation ? this.animation.playbackRate : 1;
  }
  set speed(newSpeed) {
    if (this.animation) {
      this.animation.playbackRate = newSpeed;
    }
  }
  get state() {
    return this.animation ? this.animation.playState : "finished";
  }
  get startTime() {
    return this.animation ? this.animation.startTime : null;
  }
  flatten() {
    var _a;
    if (!this.animation)
      return;
    (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({ easing: "linear" });
  }
  play() {
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.animation && this.animation.play();
  }
  pause() {
    this.animation && this.animation.pause();
  }
  stop() {
    if (!this.animation || this.state === "idle" || this.state === "finished") {
      return;
    }
    if (this.animation.commitStyles) {
      this.animation.commitStyles();
    }
    this.cancel();
  }
  complete() {
    this.animation && this.animation.finish();
  }
  cancel() {
    this.removeAnimation();
    try {
      this.animation && this.animation.cancel();
    } catch (e) {
    }
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((resolve) => {
      this.resolveFinishedPromise = resolve;
    });
  }
  attachTimeline(timeline) {
    if (!this.animation) {
      this.pendingTimeline = timeline;
    } else {
      attachTimeline(this.animation, timeline);
    }
    return noop;
  }
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    const elementTransition = { ...options };
    if (typeof elementTransition.delay === "function") {
      elementTransition.delay = elementTransition.delay(i, numElements);
    }
    for (const valueName in keyframes2) {
      const valueKeyframes = keyframes2[valueName];
      const valueOptions = {
        ...getValueTransition(elementTransition, valueName)
      };
      valueOptions.duration = valueOptions.duration ? secondsToMilliseconds(valueOptions.duration) : valueOptions.duration;
      valueOptions.delay = secondsToMilliseconds(valueOptions.delay || 0);
      animations2.push(new NativeAnimation(element, valueName, valueKeyframes, valueOptions));
    }
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs
var createScopedWaapiAnimate = (scope) => {
  function scopedAnimate(elementOrSelector, keyframes2, options) {
    return new GroupPlaybackControls(animateElements(elementOrSelector, keyframes2, options, scope));
  }
  return scopedAnimate;
};
var animateMini = createScopedWaapiAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs
function useAnimateMini() {
  const scope = useConstant(() => ({
    current: null,
    // Will be hydrated by React
    animations: []
  }));
  const animate2 = useConstant(() => createScopedWaapiAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach((animation) => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react19 = __toESM(require_react(), 1);
function useCycle(...items) {
  const index = (0, import_react19.useRef)(0);
  const [item, setItem] = (0, import_react19.useState)(items[index.current]);
  const runCycle = (0, import_react19.useCallback)(
    (next) => {
      index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
      setItem(items[index.current]);
    },
    // The array will change on each call, but by putting items.length at
    // the front of this array, we guarantee the dependency comparison will match up
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.length, ...items]
  );
  return [item, runCycle];
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer2.observe(element));
  return () => observer2.disconnect();
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
function useInView(ref, { root, margin, amount, once = false } = {}) {
  const [isInView, setInView] = (0, import_react20.useState)(false);
  (0, import_react20.useEffect)(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(event, options) {
    this.componentControls.forEach((controls) => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react21 = __toESM(require_react(), 1);
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react21.useEffect)(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react22 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current)
    return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = (0, import_react22.useRef)();
  (0, import_react22.useEffect)(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current)
        return;
      instantAnimationState.current = false;
    }));
  }, [forcedRenderCount]);
  return (callback) => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  instantAnimationState.current = false;
}

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var import_react23 = __toESM(require_react(), 1);
function useResetProjection() {
  const reset = (0, import_react23.useCallback)(() => {
    const root = rootProjectionNode.current;
    if (!root)
      return;
    root.resetTree();
  }, []);
  return reset;
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (elementId, valueName) => {
  const key = transformProps.has(valueName) ? "transform" : valueName;
  return `${elementId}: ${key}`;
};

// node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */ new Map();
var appearComplete = /* @__PURE__ */ new Map();

// node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
function handoffOptimizedAppearAnimation(elementId, valueName, frame2) {
  var _a;
  const storeId = appearStoreId(elementId, valueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const { animation, startTime } = optimisedAnimation;
  function cancelAnimation() {
    var _a2;
    (_a2 = window.MotionCancelOptimisedAnimation) === null || _a2 === void 0 ? void 0 : _a2.call(window, elementId, valueName, frame2);
  }
  animation.onfinish = cancelAnimation;
  if (startTime === null || ((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, elementId))) {
    cancelAnimation();
    return null;
  } else {
    return startTime;
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
var startFrameTime;
var readyAnimation;
var suspendedAnimations = /* @__PURE__ */ new Set();
function resumeSuspendedAnimations() {
  suspendedAnimations.forEach((data) => {
    data.animation.play();
    data.animation.startTime = data.startTime;
  });
  suspendedAnimations.clear();
}
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  if (window.MotionIsMounted) {
    return;
  }
  const id2 = element.dataset[optimizedAppearDataId];
  if (!id2)
    return;
  window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id2, name);
  if (!readyAnimation) {
    readyAnimation = startWaapiAnimation(
      element,
      name,
      [keyframes2[0], keyframes2[0]],
      /**
       * 10 secs is basically just a super-safe duration to give Chrome
       * long enough to get the animation ready.
       */
      { duration: 1e4, ease: "linear" }
    );
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
    window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
    window.MotionHasOptimisedAnimation = (elementId, valueName) => {
      if (!elementId)
        return false;
      if (!valueName) {
        return appearComplete.has(elementId);
      }
      const animationId = appearStoreId(elementId, valueName);
      return Boolean(appearAnimationStore.get(animationId));
    };
    window.MotionHandoffMarkAsComplete = (elementId) => {
      if (appearComplete.has(elementId)) {
        appearComplete.set(elementId, true);
      }
    };
    window.MotionHandoffIsComplete = (elementId) => {
      return appearComplete.get(elementId) === true;
    };
    window.MotionCancelOptimisedAnimation = (elementId, valueName, frame2, canResume) => {
      const animationId = appearStoreId(elementId, valueName);
      const data = appearAnimationStore.get(animationId);
      if (!data)
        return;
      if (frame2 && canResume === void 0) {
        frame2.postRender(() => {
          frame2.postRender(() => {
            data.animation.cancel();
          });
        });
      } else {
        data.animation.cancel();
      }
      if (frame2 && canResume) {
        suspendedAnimations.add(data);
        frame2.render(resumeSuspendedAnimations);
      } else {
        appearAnimationStore.delete(animationId);
        if (!appearAnimationStore.size) {
          window.MotionCancelOptimisedAnimation = void 0;
        }
      }
    };
    window.MotionCheckAppearSync = (visualElement, valueName, value) => {
      var _a, _b;
      const appearId = getOptimisedAppearId(visualElement);
      if (!appearId)
        return;
      const valueIsOptimised = (_a = window.MotionHasOptimisedAnimation) === null || _a === void 0 ? void 0 : _a.call(window, appearId, valueName);
      const externalAnimationValue = (_b = visualElement.props.values) === null || _b === void 0 ? void 0 : _b[valueName];
      if (!valueIsOptimised || !externalAnimationValue)
        return;
      const removeSyncCheck = value.on("change", (latestValue) => {
        var _a2;
        if (externalAnimationValue.get() !== latestValue) {
          (_a2 = window.MotionCancelOptimisedAnimation) === null || _a2 === void 0 ? void 0 : _a2.call(window, appearId, valueName);
          removeSyncCheck();
        }
      });
      return removeSyncCheck;
    };
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = startWaapiAnimation(element, name, keyframes2, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady)
      onReady(appearAnimation);
  };
  appearComplete.set(id2, false);
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react24 = __toESM(require_react(), 1);
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.measureInstanceViewportBox = createBox;
  }
  build() {
  }
  resetTransform() {
  }
  restoreTransform() {
  }
  removeValueFromRenderState() {
  }
  renderInstance() {
  }
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = (0, import_react24.useState)(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {
        onUpdate: (v) => {
          setAnimationState({ ...v });
        }
      },
      visualState,
      presenceContext: null
    }, { initialState });
  });
  (0, import_react24.useLayoutEffect)(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  const startAnimation = useConstant(() => (animationDefinition) => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react25 = __toESM(require_react(), 1);
var maxScale = 1e5;
var invertScale = (scale) => scale > 1e-3 ? 1 / scale : maxScale;
var hasWarned = false;
function useInvertedScale(scale) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const { visualElement } = (0, import_react25.useContext)(MotionContext);
  invariant(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale) {
    parentScaleX = scale.scaleX || parentScaleX;
    parentScaleY = scale.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return { scaleX, scaleY };
}

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var React3 = __toESM(require_react(), 1);
var id = 0;
var AnimateSharedLayout = ({ children }) => {
  React3.useEffect(() => {
    invariant(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return (0, import_jsx_runtime7.jsx)(LayoutGroup, { id: useConstant(() => `asl-${id++}`), children });
};

// node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs
var namespace_exports = {};
__export(namespace_exports, {
  Group: () => ReorderGroup,
  Item: () => ReorderItem
});

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react26 = __toESM(require_react(), 1);
var ReorderContext = (0, import_react26.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity)
    return order;
  const index = order.findIndex((item2) => item2.value === value);
  if (index === -1)
    return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem)
    return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
function ReorderGroupComponent({ children, as = "ul", axis = "y", onReorder, values, ...props }, externalRef) {
  const Component2 = useConstant(() => motion[as]);
  const order = [];
  const isReordering = (0, import_react27.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex((entry) => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({ value, layout: layout2[axis] });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current)
        return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter((value) => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react27.useEffect)(() => {
    isReordering.current = false;
  });
  return (0, import_jsx_runtime8.jsx)(Component2, { ...props, ref: externalRef, ignoreStrict: true, children: (0, import_jsx_runtime8.jsx)(ReorderContext.Provider, { value: context, children }) });
}
var ReorderGroup = (0, import_react27.forwardRef)(ReorderGroupComponent);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({ children, style = {}, value, as = "li", onDrag, layout: layout2 = true, ...props }, externalRef) {
  const Component2 = useConstant(() => motion[as]);
  const context = (0, import_react28.useContext)(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const { axis, registerItem, updateOrder } = context;
  return (0, import_jsx_runtime9.jsx)(Component2, { drag: axis, ...props, dragSnapToOrigin: true, style: { ...style, x: point2.x, y: point2.y, zIndex }, layout: layout2, onDrag: (event, gesturePoint) => {
    const { velocity } = gesturePoint;
    velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
    onDrag && onDrag(event, gesturePoint);
  }, onLayoutMeasure: (measured) => registerItem(value, measured), ref: externalRef, ignoreStrict: true, children });
}
var ReorderItem = (0, import_react28.forwardRef)(ReorderItemComponent);

// node_modules/framer-motion/dist/es/animation/utils/stagger.mjs
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}

// node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var sync = frame;
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = (process2) => cancelFrame(process2);
  return acc;
}, {});

// node_modules/framer-motion/dist/es/easing/steps.mjs
function steps(numSteps, direction = "end") {
  return (progress2) => {
    progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
    const expanded = progress2 * numSteps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / numSteps);
  };
}
export {
  AcceleratedAnimation,
  AnimatePresence,
  AnimateSharedLayout,
  DeprecatedLayoutGroupContext,
  DragControls,
  FlatTree,
  LayoutGroup,
  LayoutGroupContext,
  LazyMotion,
  MotionConfig,
  MotionConfigContext,
  MotionContext,
  MotionGlobalConfig,
  MotionValue,
  PresenceContext,
  namespace_exports as Reorder,
  SwitchLayoutGroupContext,
  VisualElement,
  addPointerEvent,
  addPointerInfo,
  addScaleCorrector,
  animate,
  animateMini,
  animateValue,
  animateVisualElement,
  animationControls,
  animations,
  anticipate,
  backIn,
  backInOut,
  backOut,
  buildTransform,
  calcLength,
  cancelFrame,
  cancelSync,
  circIn,
  circInOut,
  circOut,
  clamp,
  color,
  complex,
  createBox,
  createRendererMotionComponent,
  createScopedAnimate,
  cubicBezier,
  delay,
  disableInstantTransitions,
  distance,
  distance2D,
  domAnimation,
  domMax,
  domMin,
  easeIn,
  easeInOut,
  easeOut,
  filterProps,
  findSpring,
  frame,
  frameData,
  frameSteps,
  inView,
  inertia,
  interpolate,
  invariant,
  isBrowser,
  isDragActive,
  isMotionComponent,
  isMotionValue,
  isValidMotionProp,
  keyframes,
  m,
  makeUseVisualState,
  mirrorEasing,
  mix,
  motion,
  motionValue,
  optimizedAppearDataAttribute,
  pipe,
  progress,
  px,
  resolveMotionValue,
  reverseEasing,
  scroll,
  scrollInfo,
  spring,
  stagger,
  startOptimizedAppearAnimation,
  steps,
  sync,
  transform,
  unwrapMotionComponent,
  useAnimate,
  useAnimateMini,
  useAnimation,
  useAnimationControls,
  useAnimationFrame,
  useCycle,
  useAnimatedState as useDeprecatedAnimatedState,
  useInvertedScale as useDeprecatedInvertedScale,
  useDomEvent,
  useDragControls,
  useElementScroll,
  useForceUpdate,
  useInView,
  useInstantLayoutTransition,
  useInstantTransition,
  useIsPresent,
  useIsomorphicLayoutEffect,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  usePresence,
  useReducedMotion,
  useReducedMotionConfig,
  useResetProjection,
  useScroll,
  useSpring,
  useTime,
  useTransform,
  useUnmountEffect,
  useVelocity,
  useViewportScroll,
  useWillChange,
  visualElementStore,
  warning,
  wrap
};
//# sourceMappingURL=framer-motion.js.map