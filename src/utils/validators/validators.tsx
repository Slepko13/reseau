export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = value => {
      if (value) return undefined;
      return "Field is required"
}

export const maxLength = (maxLength: number): FieldValidatorType => value => {
      if (value && value.length > maxLength)
            return `Max length is ${maxLength} symbols`;
      return undefined;
}

export const minLength = (minLength: number): FieldValidatorType => value => {
      if (value && value.length < minLength)
            return `Min length is ${minLength} symbols`;
      return undefined;
}

