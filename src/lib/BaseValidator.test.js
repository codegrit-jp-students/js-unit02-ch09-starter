import BaseValidator from './BaseValidator';

describe('base validator', () => {
  it("should pass with valid eMail", () => {
    const eMail = "abc@def.com";
    const validator = new BaseValidator(eMail, 'メールアドレス');
    return validator._cannotEmpty()
      .then((res) => {
        expect(res).toEqual(validator)
      })
  })

  it("should return error with empty eMail", () => {
    const eMail = "";
    const validator = new BaseValidator(eMail, 'メールアドレス');
    return validator._cannotEmpty()
      .catch((res) => {
        expect(res).toEqual({
          message: "メールアドレスは必須です。",
          success: false
        })
      })
  })

  it("should pass with valid  password", () => {
    const password = "abcAbc1";
    const validator = new BaseValidator(password, 'パスワード');
    return validator._cannotEmpty()
      .then((res) => {
        expect(res).toEqual(validator)
      })
  })

  it("should return error with empty password", () => {
    const password = "";
    const validator = new BaseValidator(password, 'パスワード');
    return validator._cannotEmpty()
      .catch((res) => {
        expect(res).toEqual({
          message: "パスワードは必須です。",
          success: false
        })
      })
  })
})