import { Component, OnInit } from '@angular/core';
import {Camera, CameraDirection, CameraResultType, CameraSource} from '@capacitor/camera';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async onGetphoto(): Promise<void> {
    await Camera.checkPermissions().then( data => {
      if (data.camera === 'granted' && data.photos === 'granted') {
        this.takePhoto();
      }
    });
  }
  async takePhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 50,
      width: 512,
      height: 512,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
      direction: CameraDirection.Front
    });
    const imageUrl = image.dataUrl;
    console.log(imageUrl);
  }
}
