export type EasingFunction = (t: number) => number;
export interface MotionTokenSet {
  spring: EasingFunction;
  easeIn: EasingFunction;
  easeOut: EasingFunction;
  easeInOut: EasingFunction;
}
export const motionTokens: MotionTokenSet;
export default motionTokens;
