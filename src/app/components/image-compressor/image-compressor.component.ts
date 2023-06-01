import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-image-compressor',
  standalone: true,
  imports: [CommonModule, NzUploadModule],
  providers: [NzMessageService],
  templateUrl: './image-compressor.component.html',
  styleUrls: ['./image-compressor.component.scss'],
})
export class ImageCompressorComponent {
  constructor(private msg: NzMessageService) {}

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
