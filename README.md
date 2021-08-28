# UFOs
![nasa](https://user-images.githubusercontent.com/84756166/131226539-93bd3dc2-688e-4be7-a882-796e02b770c0.jpg)

## Overview
In this analysis I've created a web app that displays a table of UFO data. 

The goal is to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, users will be able to filter by the city, state, country, and shape.

## Results
Previously, our filters allowed the user to search through UFO data by date, only. Now the user can filter through data using partial or complete combinations of known search filters. For example,

#### State Filter Only
![state_filter](https://user-images.githubusercontent.com/84756166/131227337-f40f0e13-3f9d-4525-bf63-03fe49009850.png)

The user can filter data by a single criteria. The image displays a table of results if the only given criteria is state: ca. 

#### State + City Filter 
![state_city_filter](https://user-images.githubusercontent.com/84756166/131227386-03d94a9a-201f-4d2d-b99b-4018c5847876.png)

Adding more specific search filters will narrow the search. The image displays a table of results if the given criteria are state: ca, city: el cajon.

#### State + City + Date Filter
![state_city_date_filter](https://user-images.githubusercontent.com/84756166/131227392-795c4884-76a6-480b-8cf0-e76fb666c941.png)

Increased specificity in a search allows for more accurate processing of large sets of data. The image displays a table of results if the given criteria are state: ca, city: el cajon and date: 1/1/2010.

#### State + City + Date + Shape Filter 
![state_city_date_shape_filter](https://user-images.githubusercontent.com/84756166/131227398-a8547dad-ee3d-43f2-a9d1-699ebd93967d.png)

Using a combination of filters the user can search down to a single result. They can start with a single piece of data for their inquiry and narrow as they go with growing specificity. Searching in this way opens the possibility to find related, previously unknown, results as the user researches the UFO sightings. 

## Summary

One drawback of the current design is that the filters automatically update without hitting enter when you click out of a box. I would like the design to require an enter to be input so we can more easily display how linking multiple filters changes the given output. 

For further development, I would recommend providing exceptions if an input deviates from the formatted input syntax. For example, the user could be able to enter United States instead of us. 

Second, I would recommend adding a date range to the datetime filter, allowing the user to search for UFO sightings within a specified range of dates. This may unveil some hidden connections between events or show where these UFO's are traveling. We could even make a map to connect sightings!



















