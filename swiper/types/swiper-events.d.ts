import type { SwiperOptions } from 'swiper/types/swiper-options.js';
import type Swiper from 'swiper/types/swiper-class.js';

import type { A11yEvents } from 'swiper/types/modules/a11y.js';
import type { AutoplayEvents } from 'swiper/types/modules/autoplay.js';
import type { ControllerEvents } from 'swiper/types/modules/controller.js';
import type { CoverflowEffectEvents } from 'swiper/types/modules/effect-coverflow.js';
import type { CubeEffectEvents } from 'swiper/types/modules/effect-cube.js';
import type { FadeEffectEvents } from 'swiper/types/modules/effect-fade.js';
import type { FlipEffectEvents } from 'swiper/types/modules/effect-flip.js';
import type { CreativeEffectEvents } from 'swiper/types/modules/effect-creative.js';
import type { CardsEffectEvents } from 'swiper/types/modules/effect-cards.js';
import type { HashNavigationEvents } from 'swiper/types/modules/hash-navigation.js';
import type { HistoryEvents } from 'swiper/types/modules/history.js';
import type { KeyboardEvents } from 'swiper/types/modules/keyboard.js';
import type { MousewheelEvents } from 'swiper/types/modules/mousewheel.js';
import type { NavigationEvents } from 'swiper/types/modules/navigation.js';
import type { PaginationEvents } from 'swiper/types/modules/pagination.js';
import type { ParallaxEvents } from 'swiper/types/modules/parallax.js';
import type { ScrollbarEvents } from 'swiper/types/modules/scrollbar.js';
import type { ThumbsEvents } from 'swiper/types/modules/thumbs.js';
import type { VirtualEvents } from 'swiper/types/modules/virtual.js';
import type { ZoomEvents } from 'swiper/types/modules/zoom.js';
import type { FreeModeEvents } from 'swiper/types/modules/free-mode.js';

export interface SwiperEvents {
  // CORE_EVENTS_START
  /**
   * Fired right after Swiper initialization.
   * @note Note that with `swiper.on('init')` syntax it will
   * work only in case you set `init: false` parameter.
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   init: false,
   *   // other parameters
   * });
   * swiper.on('init', function() {
   *  // do something
   * });
   * // init Swiper
   * swiper.init();
   * ```
   *
   * @example
   * ```js
   * // Otherwise use it as the parameter:
   * const swiper = new Swiper('.swiper', {
   *   // other parameters
   *   on: {
   *     init: function () {
   *       // do something
   *     },
   *   }
   * });
   * ```
   */
  init: (swiper: Swiper) => any;

  /**
   * Event will be fired right before Swiper destroyed
   */
  beforeDestroy: (swiper: Swiper) => void;

  /**
   * Event will be fired when currently active slide is changed
   */
  slideChange: (swiper: Swiper) => void;

  /**
   * Event will be fired in the beginning of animation to other slide (next or previous).
   */
  slideChangeTransitionStart: (swiper: Swiper) => void;

  /**
   * Event will be fired after animation to other slide (next or previous).
   */
  slideChangeTransitionEnd: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionStart" but for "forward" direction only
   */
  slideNextTransitionStart: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionEnd" but for "forward" direction only
   */
  slideNextTransitionEnd: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionStart" but for "backward" direction only
   */
  slidePrevTransitionStart: (swiper: Swiper) => void;

  /**
   * Same as "slideChangeTransitionEnd" but for "backward" direction only
   */
  slidePrevTransitionEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired in the beginning of transition.
   */
  transitionStart: (swiper: Swiper) => void;

  /**
   * Event will be fired after transition.
   */
  transitionEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired when user touch Swiper. Receives `pointerdown` event as an arguments.
   */
  touchStart: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper. Receives `pointermove` event as an arguments.
   */
  touchMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives `pointermove` event as an arguments.
   */
  touchMoveOpposite: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user touch and move finger over Swiper and move it. Receives `pointermove` event as an arguments.
   */
  sliderMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user release Swiper. Receives `pointerup` event as an arguments.
   */
  touchEnd: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
   */
  click: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user click/tap on Swiper. Receives `pointerup` event as an arguments.
   */
  tap: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when user double tap on Swiper's container. Receives `pointerup` event as an arguments
   */
  doubleTap: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
   */
  progress: (swiper: Swiper, progress: number) => void;

  /**
   * Event will be fired when Swiper reach its beginning (initial position)
   */
  reachBeginning: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper reach last slide
   */
  reachEnd: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper goes to beginning or end position
   */
  toEdge: (swiper: Swiper) => void;

  /**
   * Event will be fired when Swiper goes from beginning or end position
   */
  fromEdge: (swiper: Swiper) => void;

  /**
   * Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
   */
  setTranslate: (swiper: Swiper, translate: number) => void;

  /**
   * Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an arguments
   */
  setTransition: (swiper: Swiper, transition: number) => void;

  /**
   * Event will be fired on window resize right before swiper's onresize manipulation
   */
  resize: (swiper: Swiper) => void;

  /**
   * Event will be fired if observer is enabled and it detects DOM mutations
   */
  observerUpdate: (swiper: Swiper) => void;

  /**
   * Event will be fired right before "loop fix"
   */
  beforeLoopFix: (swiper: Swiper) => void;

  /**
   * Event will be fired after "loop fix"
   */
  loopFix: (swiper: Swiper) => void;

  /**
   * Event will be fired on breakpoint change
   */
  breakpoint: (swiper: Swiper, breakpointParams: SwiperOptions) => void;

  /**
   * !INTERNAL: Event will fired right before breakpoint change
   */
  _beforeBreakpoint?: (swiper: Swiper, breakpointParams: SwiperOptions) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on swiper container element
   */
  _containerClasses?: (swiper: Swiper, classNames: string) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on swiper slide element
   */
  _slideClass?: (swiper: Swiper, slideEl: HTMLElement, classNames: string) => void;

  /**
   * !INTERNAL: Event will fired after setting CSS classes on all swiper slides
   */
  _slideClasses?: (
    swiper: Swiper,
    slides: { slideEl: HTMLElement; classNames: string; index: number }[],
  ) => void;

  /**
   * !INTERNAL: Event will fired as soon as swiper instance available (before init)
   */
  _swiper?: (swiper: Swiper) => void;

  /**
   * !INTERNAL: Event will be fired on free mode touch end (release) and there will no be momentum
   */
  _freeModeNoMomentumRelease?: (swiper: Swiper) => void;

  /**
   * Event will fired on active index change
   */
  activeIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired on snap index change
   */
  snapIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired on real index change
   */
  realIndexChange: (swiper: Swiper) => void;
  /**
   * Event will fired right after initialization
   */
  afterInit: (swiper: Swiper) => void;
  /**
   * Event will fired right before initialization
   */
  beforeInit: (swiper: Swiper) => void;
  /**
   * Event will fired before resize handler
   */
  beforeResize: (swiper: Swiper) => void;
  /**
   * Event will fired before slide change transition start
   */
  beforeSlideChangeStart: (swiper: Swiper) => void;
  /**
   * Event will fired before transition start
   */
  beforeTransitionStart: (swiper: Swiper, speed: number, internal: any) => void; // what is internal?
  /**
   * Event will fired on direction change
   */
  changeDirection: (swiper: Swiper) => void;
  /**
   * Event will be fired when user double click/tap on Swiper
   */
  doubleClick: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
  /**
   * Event will be fired on swiper destroy
   */
  destroy: (swiper: Swiper) => void;
  /**
   * Event will be fired on momentum bounce
   */
  momentumBounce: (swiper: Swiper) => void;
  /**
   * Event will be fired on orientation change (e.g. landscape -> portrait)
   */
  orientationchange: (swiper: Swiper) => void;
  /**
   * Event will be fired in the beginning of animation of resetting slide to current one
   */
  slideResetTransitionStart: (swiper: Swiper) => void;
  /**
   * Event will be fired in the end of animation of resetting slide to current one
   */
  slideResetTransitionEnd: (swiper: Swiper) => void;
  /**
   * Event will be fired with first touch/drag move
   */
  sliderFirstMove: (swiper: Swiper, event: TouchEvent) => void;
  /**
   * Event will be fired when number of slides has changed
   */
  slidesLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when slides grid has changed
   */
  slidesGridLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when snap grid has changed
   */
  snapGridLengthChange: (swiper: Swiper) => void;
  /**
   * Event will be fired after swiper.update() call
   */
  update: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper is locked (when `watchOverflow` enabled)
   */
  lock: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper is unlocked (when `watchOverflow` enabled)
   */
  unlock: (swiper: Swiper) => void;
  // CORE_EVENTS_END
}

interface SwiperEvents extends A11yEvents {}
interface SwiperEvents extends AutoplayEvents {}
interface SwiperEvents extends ControllerEvents {}
interface SwiperEvents extends CoverflowEffectEvents {}
interface SwiperEvents extends CubeEffectEvents {}
interface SwiperEvents extends FadeEffectEvents {}
interface SwiperEvents extends FlipEffectEvents {}
interface SwiperEvents extends CreativeEffectEvents {}
interface SwiperEvents extends CardsEffectEvents {}
interface SwiperEvents extends HashNavigationEvents {}
interface SwiperEvents extends HistoryEvents {}
interface SwiperEvents extends KeyboardEvents {}
interface SwiperEvents extends MousewheelEvents {}
interface SwiperEvents extends NavigationEvents {}
interface SwiperEvents extends PaginationEvents {}
interface SwiperEvents extends ParallaxEvents {}
interface SwiperEvents extends ScrollbarEvents {}
interface SwiperEvents extends ThumbsEvents {}
interface SwiperEvents extends VirtualEvents {}
interface SwiperEvents extends ZoomEvents {}
interface SwiperEvents extends FreeModeEvents {}
