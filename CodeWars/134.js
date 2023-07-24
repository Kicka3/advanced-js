class FileNameExtractor {
  static extractFileName (dirtyFileName) {
      return dirtyFileName.match(/\d+_.+\..+\./).join``.replace(/^\d+_/,'').replace(/\.$/,'')
  }
}