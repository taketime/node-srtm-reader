Read SRTM files.
================

Very, very much a work in progress.

1. Go download an SRTM hgt file.  example:  
  `wget http://dds.cr.usgs.gov/srtm/version2_1/SRTM1/Region_01/N45W122.hgt.zip && unzip N45W122.hgt.zip`
2. Turn it into some json with `node index.js`.  You'll see `heights.json` in your directory.
