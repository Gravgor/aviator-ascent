import zxcvbn from "zxcvbn"; 


export default function calculatePasswordStrength(password: string) {
    const { score } = zxcvbn(password);
    return score;
}

export const getPasswordColor = (strength: number): string => {
    switch (strength) {
      case 1:
        return "red"; // Very Weak
      case 2:
        return "orange"; // Weak
      case 3:
        return "yellow"; // Moderate
      case 4:
        return "green"; // Strong
      default:
        return "transparent";
    }
  };