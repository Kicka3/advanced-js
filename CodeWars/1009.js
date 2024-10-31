function stackHeight3d(layers) {
   return layers > 0 ? Math.sqrt(2 / 3.0) * (layers - 1) + 1 : 0;
}