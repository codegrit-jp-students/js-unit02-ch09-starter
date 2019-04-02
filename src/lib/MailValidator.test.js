import MailValidator from './MailValidator';

describe('mailvalidator', () => {
  it("should pass with valid data", () => {
    const eMail = "abc@cde.com";
    const validator = new MailValidator(eMail);
    return validator.validate()
      .then((res) => {
        expect(res).toEqual({
          success: true
        });
    });
  });

  it("should return error with empty eMail", () => {
    const eMail = "";
    const validator = new MailValidator(eMail);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスは必須です。')
      });
  })

  it("should return error with wrong eMail format", () => {
    const eMail = "test";
    const validator = new MailValidator(eMail);
    return validator.validate()
      .then((res) => {
        expect(res.success).toBeFalsy();
        expect(res.message).toBe('メールアドレスのフォーマットが異なります。')
      });
  })
});