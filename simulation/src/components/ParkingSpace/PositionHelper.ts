export class PositionHelper {
  static TOP = "TOP";
  static LEFT = "LEFT";
  static RIGHT = "RIGHT";
  static BOTTOM = "BOTTOM";
  static MIDDLETOP = "MIDDLETOP";
  static MIDDLEBOTTOM = "MIDDLEBOTTOM";

  static calc(number: number): string {
    if (number >= 1 && number <= 12) {
      return this.TOP;
    } else if (number >= 13 && number <= 17) {
      return this.RIGHT;
    } else if (number >= 18 && number <= 29) {
      return this.BOTTOM;
    } else if (number >= 30 && number <= 34) {
      return this.LEFT;
    } else if (number >= 35 && number <= 44) {
      return this.MIDDLETOP;
    } else if (number >= 45 && number <= 54) {
      return this.MIDDLEBOTTOM;
    }
    return "INVALID";
  }

  static calcSpecialClass(number: number): string {
    if (
      number == 12 ||
      number == 17 ||
      number == 29 ||
      number == 34 ||
      number == 44
    ) {
      return " last";
    } else if (number == 54) {
      return " lastMiddle";
    }

    return "";
  }
}
