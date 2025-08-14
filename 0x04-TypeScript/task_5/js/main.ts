// Brand convention & Nominal typing

export interface MajorCredits {
  credits: number;
  _majorBrand: "major";
}

export interface MinorCredits {
  credits: number;
  _minorBrand: "minor";
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "major",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "minor",
  };
}
