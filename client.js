// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  const leftPanel = new Surface(800, 900, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(0, 0);
  const rightPanel = new Surface(1000, 500, Surface.SurfaceShape.Surface);
  rightPanel.setAngle(0, 0);
  const behindPanel = new Surface(900, 400, Surface.SurfaceShape.Flat);
  behindPanel.setAngle(3.1, 0);

  const bottomPanel = new Surface(1200, 75, Surface.SurfaceShape.Flat);
  bottomPanel.setAngle(0, -0.65);

  r360.renderToSurface(
    r360.createRoot('LeftPanel'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('BehindPanel'),
    behindPanel,
  );
  r360.renderToSurface(
    r360.createRoot('RightPanel'),
    rightPanel,
  );
  r360.renderToLocation(
    r360.createRoot('CenterPanel'),
    new Location([-375, 250, -400]),
  );
  r360.renderToSurface(
    r360.createRoot('BottomPanel'),
    bottomPanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
