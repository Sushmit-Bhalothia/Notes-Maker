export class CreateNoteDto {
  readonly title: string;
  readonly content: string;
}

export class UpdateNoteDto {
  [key: string]: any;
}
