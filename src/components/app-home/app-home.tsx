import { Component, Element, forceUpdate, h, State } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: false,
})
export class AppHome {
  @Element() element: HTMLStencilElement;

  componentDidLoad = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
        width: 1280,
        aspectRatio: 1.5,
      },
    });
    const video = this.element.querySelector("video");
    video.srcObject = stream;
  };

  @State()
  private images = [];

  private capture = async () => {
    const video = this.element.querySelector("video");

    const canvas = document.createElement("canvas");
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.images.push(canvas.toDataURL("image/jpeg"));

    forceUpdate(this);
  };

  render() {
    const renerImages = () => {
      return this.images.map((v, i) => {
        return (
          <img
            src={v}
            class="picture"
            onClick={() => {
              console.log("click", i);
              this.images = this.images.filter((_, idx) => idx != i);
            }}
          ></img>
        );
      });
    };

    return (
      <div class="app-home">
        <video autoplay></video>
        <div class="camera-btn-box">
          <button
            class="button is-large is-rounded"
            onClick={() => {
              this.capture();
            }}
          >
            <span class="icon is-large">
              <i class="fas fa-camera"></i>
            </span>
          </button>
        </div>
        <div class="pictures-box">{renerImages()}</div>
      </div>
    );
  }
}
