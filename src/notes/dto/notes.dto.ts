export class CreateNoteDto {
  readonly title: string;
  readonly content: string;
}

export class UpdateNoteDto {
  readonly title?: string;
  readonly content?: string;
}
