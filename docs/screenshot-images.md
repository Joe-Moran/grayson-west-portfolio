# Screenshot images

Use a raw screenshot instead of exporting a colored artboard. In an MDX case study:

```mdx
import ScreenshotImage from '../../../components/ScreenshotImage.astro';
import screenshot from '../../../assets/content/ux/project/screenshot.png';

<ScreenshotImage
  src={screenshot}
  alt="Describe what the screenshot shows"
  background="rust"
  caption="Optional caption"
/>
```

Background presets match the existing exported images: `rust` (#a95248), `gold`
(#f7c163), and `plum` (#4d444e). Existing LightboxImage images are unchanged.

Optional settings:

- `padding`: `small`, `medium` (default), or `large`; uses 1%, 2%, or 3% of the frame width on each side.
- `aspectRatio`: `auto` (default), `4/3`, `16/9`, or `1/1`. Images remain centered and uncropped. Tall screenshots may leave extra room horizontally in a wide frame.
- `imageWidth`: percentage of the available page width, from 1–100 (default 100). The screenshot and its background resize together, centered, with padding proportional to the frame width.
- `device`: `ipad` adds a landscape iPad bezel and camera, including in the enlarged view.
- `rounded`: round the screenshot corners (default false).
- `shadow`: add a screenshot shadow (default true).

Clicking or keyboard-activating a frame opens the screenshot with the same colored surround, proportions, and image styling in the
existing lightbox. The surround is rendered by CSS, not baked into the original image.

Run the development server and visit `/screenshot-preview` to compare the three
presets. That preview redirects to `/404` outside development.
