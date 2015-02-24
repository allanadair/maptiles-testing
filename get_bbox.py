import fiona

with fiona.open('tracks.shp', 'r') as shpfile:
	print(shpfile.bounds)
