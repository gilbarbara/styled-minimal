export function placeholder(content: string): string {
  return `
    &::-webkit-input-placeholder {
      ${content};
    }
  
    &:-moz-placeholder {
      ${content};
    }
  
    &::-moz-placeholder {
      ${content};
    }
  
    &:-ms-input-placeholder {
      ${content};
    }
  `;
}
