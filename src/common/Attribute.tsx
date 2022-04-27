export class Attribute {
  constructor(
    public imageFile: File = new File([], ""),
    public imagePreview: any = null,
    public lottery: boolean = false,
    public data: string = ""
  ) {}

  setImageFile(input: any) {
    this.imageFile = input;
  }
  setImagePreview(input: any) {
    this.imagePreview = input;
  }
}
