export class Attribute {
  constructor(
    private imageFile: File = new File([], ""),
    private imagePreview: any = null,
    private lottery: boolean = false,
    private data: string = ""
  ) {}
}
