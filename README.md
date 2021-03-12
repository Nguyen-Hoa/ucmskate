# ucmskate.com
Official source code for University of California, Merced Skate Club website.

## Who is Skating App

### Users can...
* Discover if anyone else is skating, at any locale
* Share their own location

A map displaying the location of skaters that have checked in. Coordinates are gathered via user device and sent to Firebase. The database will remove skaters when they become stale. [OpenLayers](https://openlayers.org/) is used to render an interactive map with icons for each skater.

### Roadmap
- [x] Render Map
- [x] Render Skaters
- [x] React Spring
- [x] Skater Check-in
- [x] Check-in From Validation
- [x] Remove Stale Skaters
- [x] Captcha
- [x] Skater Unique Icons
- [ ] Skater Profile/Auth?
- [ ] Micro-transaction Icons