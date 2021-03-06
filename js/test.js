

mapboxgl.accessToken = 'pk.eyJ1IjoiamViMTkyMDA0IiwiYSI6ImNpbWNyODZyaDAwMmZ1MWx2dHdzcHQ5M2EifQ.IZsMnB3wOYFIaX1A5sy7Mw';
				var map = new mapboxgl.Map({ container: 'map', style: 'mapbox://styles/mapbox/streets-v9',center:[-84.785487, 43.628709], zoom: 5 });
				
				//bike
				var url = 'geojson/bike/20_rd_to_grand_traverse_county_mccct.geojson';
				var url1 = 'geojson/bike/atlanta_to_hunt_creek_mccct.geojson';
				var url2 = 'geojson/bike/bass_lake_motorcycle_trail.geojson';
				var url3 = 'geojson/bike/beaver_creek_trail_mccct.geojson';
				var url4 = 'geojson/bike/big_o_motorcycle_trail.geojson';
				var url5 = 'geojson/bike/brevort_trout_lake_motorcycle_trail.geojson';
				var url6 = 'geojson/bike/evart_motorcycle_trail.geojson';
				var url7 = 'geojson/bike/foreman_lake_motorcycle_trail.geojson';
				var url8 = 'geojson/bike/grand_traverse_county_to_supply_rd_mccct.geojson';
				var url9 = 'geojson/bike/grand_traverse_motorcycle_trail.geojson';
				var url10 = 'geojson/bike/grand_traverse_to_leetsville_mccct.geojson';
				var url11 = 'geojson/bike/holton_loop_motorcycle_trail.geojson';
				var url12 = 'geojson/bike/horseshoe_lake_motorcycle_trail.geojson';
				var url13 = 'geojson/bike/hunt_creek_motorcycle_trail.geojson';
				var url14 = 'geojson/bike/kinross_motorcycle_trail.geojson';
				var url15 = 'geojson/bike/leetsville_to_kalkaska_mccct.geojson';
				var url16 = 'geojson/bike/lincoln_hills_motorcycle_trail.geojson';
				var url17 = 'geojson/bike/little_manistee_motorcycle_trail.geojson';
				var url18 = 'geojson/bike/long_lake_motorcycle_trail.geojson';
				var url19 = 'geojson/bike/m_20_to_big_o__mccct_trail.geojson';
				var url20 = 'geojson/bike/m_20_to_big_o_motorcycle__mccct.geojson';
				var url21 = 'geojson/bike/m_30_north_gladwin_mccct.geojson';
				var url22 = 'geojson/bike/m_30_to_st_helen_3_mccct.geojson';
				var url23 = 'geojson/bike/m_55_to_20_rd_mccct.geojson';
				var url24 = 'geojson/bike/m_55_to_state_rd_mccct.geojson';
				var url25 = 'geojson/bike/mio_to_meadows_mccct.geojson';
				var url26 = 'geojson/bike/moss_lake_motorcycle_trail.geojson';
				var url27 = 'geojson/bike/newberry_rexton_motorcycle_trail.geojson';
				var url28 = 'geojson/bike/north_missaukee_motorcycle_trail.geojson';
				var url29 = 'geojson/bike/north_missaukee_motorcycle_trail__mccct.geojson';
				var url30 = 'geojson/bike/porterfield_lake_motorcycle_trail.geojson';
				var url31 = 'geojson/bike/red_bridge_to_atlanta_mccct.geojson';
				var url32 = 'geojson/bike/sandtown_motorcycle_trail.geojson';
				var url33 = 'geojson/bike/st_helen_to_geels_trail__mccct.geojson';
				var url34 = 'geojson/bike/the_meadows_motorcycle_trail.geojson';
				var url35 = 'geojson/bike/tin_cup_spring_motorcycle_trail.geojson';
				var url36 = 'geojson/bike/tomahawk_motorcycle_trail_b_loop.geojson';
				var url37 = 'geojson/bike/tomahawk_motorcycle_trail_c_loop.geojson';
				var url38 = 'geojson/bike/tomahawk_to_kalkaska_mccct.geojson';
				var url39 = 'geojson/bike/tomahawk_to_red_bridge_mccct.geojson';
				
				//atv
				var atv = 'geojson/atv/alcona_orv_trail.geojson';
				var atv1 = 'geojson/atv/ambrose_lake_to_ogemaw_hills_trail.geojson';
				var atv2 = 'geojson/atv/ambrose_lake_to_rose_city_trail.geojson';
				var atv3 = 'geojson/atv/ambrose_lake_trail.geojson';
				var atv4 = 'geojson/atv/atlanta_trail.geojson';
				var atv5 = 'geojson/atv/baraga_plains_trail.geojson';
				var atv6 = 'geojson/atv/bay_city_lake_trail.geojson';
				var atv7 = 'geojson/atv/big_bear_trail.geojson';
				var atv8 = 'geojson/atv/black_lake_trail.geojson';
				var atv9 = 'geojson/atv/bull_gap_trail.geojson';
				var atv10 = 'geojson/atv/bummers_roost_trail.geojson';
				var atv11 = 'geojson/atv/cedar_creek_trail.geojson';
				var atv12 = 'geojson/atv/cranberry_lake_trail.geojson';
				var atv13 = 'geojson/atv/crapo_creek_trail.geojson';
				var atv14 = 'geojson/atv/danaher_plains_trail.geojson';
				var atv15 = 'geojson/atv/denton_creek_trail.geojson';
				var atv16 = 'geojson/atv/drummond_island_trail.geojson';
				var atv17 = 'geojson/atv/forest_islands_trail.geojson';
				var atv18 = 'geojson/atv/frederic_trail.geojson';
				var atv19 = 'geojson/atv/gladwin_trail.geojson';
				var atv20 = 'geojson/atv/huron_sand_lake_spur.geojson';
				var atv21 = 'geojson/atv/huron_trail.geojson';
				var atv22 = 'geojson/atv/kalkaska_trail.geojson';
				var atv23 = 'geojson/atv/keweenaw_state_trail.geojson';
				var atv24 = 'geojson/atv/leetsville_trail.geojson';
				var atv25 = 'geojson/atv/leota_trail.geojson';
				var atv26 = 'geojson/atv/little_o_trail.geojson';
				var atv27 = 'geojson/atv/marquette_manistique_trail.geojson';
				var atv28 = 'geojson/atv/mio_trail.geojson';
				var atv29 = 'geojson/atv/north_missaukee_trail.geojson';
				var atv30 = 'geojson/atv/norway_trail.geojson';
				var atv31 = 'geojson/atv/ogemaw_hills_to_st_helen_trail.geojson';
				var atv32 = 'geojson/atv/ogemaw_hills_trail.geojson';
				var atv33 = 'geojson/atv/old_state_house_trail.geojson';
				var atv34 = 'geojson/atv/pine_ridge_trail.geojson';
				var atv35 = 'geojson/atv/pioneer_trail.geojson';
				var atv36 = 'geojson/atv/red_bridge_trail.geojson';
				var atv37 = 'geojson/atv/rose_city_trail.geojson';
				var atv38 = 'geojson/atv/silver_creek_trail.geojson';
				var atv39 = 'geojson/atv/st_helen_trail.geojson';
				var atv40 = 'geojson/atv/the_meadows_trail.geojson';
				var atv41 = 'geojson/atv/the_meadows_trail_rose_city_trail_connector.geojson';
				var atv42 = 'geojson/atv/tomahawk_trail_a_loop.geojson';
				var atv43 = 'geojson/atv/two_heart_trail.geojson';
				var atv44 = 'geojson/atv/west_higgins_trail.geojson';
				var atv45 = 'geojson/atv/white_cloud_loop.geojson';
				//utv
				var utv = 'geojson/utv/atlanta_route.geojson';
				var utv1 = 'geojson/utv/bergland_to_sidnaw_route.geojson';
				var utv2 = 'geojson/utv/bill_nicholls_route.geojson';
				var utv3 = 'geojson/utv/black_lake_route.geojson';
				var utv4 = 'geojson/utv/days_river_route.geojson';
				var utv5 = 'geojson/utv/denton_creek_route.geojson';
				var utv6 = 'geojson/utv/denton_creek_to_st_helen_connector_route.geojson';
				var utv7 = 'geojson/utv/devils_lake_route.geojson';
				var utv8 = 'geojson/utv/drummond_island_route.geojson';
				var utv9 = 'geojson/utv/felch_grade_route.geojson';
				var utv10 = 'geojson/utv/forest_islands_route.geojson';
				var utv11 = 'geojson/utv/freda_grade_route.geojson';
				var utv12 = 'geojson/utv/frederic_route.geojson';
				var utv13 = 'geojson/utv/geels_to_roscommon_route.geojson';
				var utv14 = 'geojson/utv/gladwin_route.geojson';
				var utv15 = 'geojson/utv/grand_traverse_route.geojson';
				var utv16 = 'geojson/utv/hancock_to_calumet_route.geojson';
				var utv17 = 'geojson/utv/indian_gardens_orv_route.geojson';
				var utv18 = 'geojson/utv/indian_river_route.geojson';
				var utv19 = 'geojson/utv/iron_river_to_marenisco_route.geojson';
				var utv20 = 'geojson/utv/ishpeming_to_republic_route.geojson';
				var utv21 = 'geojson/utv/kalkaska_route.geojson';
				var utv22 = 'geojson/utv/lake_linden_route.geojson';
				var utv23 = 'geojson/utv/lincoln_hills_route.geojson';
				var utv24 = 'geojson/utv/little_manistee_route.geojson';
				var utv25 = 'geojson/utv/marenisco_korpela_road_route.geojson';
				var utv26 = 'geojson/utv/marquette_manistique_route.geojson';
				var utv27 = 'geojson/utv/mio_route.geojson';
				var utv28 = 'geojson/utv/north_branch_route.geojson';
				var utv29 = 'geojson/utv/north_missaukee_route.geojson';
				var utv30 = 'geojson/utv/ogemaw_hills_route.geojson';
				var utv31 = 'geojson/utv/old_state_house_route.geojson';
				var utv32 = 'geojson/utv/ottawa_east_connector.geojson';
				var utv33 = 'geojson/utv/powers_arnold_route.geojson';
				var utv34 = 'geojson/utv/red_bridge_route.geojson';
				var utv35 = 'geojson/utv/republic_champion_route.geojson';
				var utv36 = 'geojson/utv/soo_raco_route.geojson';
				var utv37 = 'geojson/utv/st_helen_route.geojson';
				var utv38 = 'geojson/utv/st_ignace_to_trout_lake_route.geojson';
				var utv39 = 'geojson/utv/stateline_route.geojson';
				var utv40 = 'geojson/utv/tin_cup_spring_route.geojson';
				var utv41 = 'geojson/utv/west_higgins_route.geojson';
				var utv42 = 'geojson/utv/wisconsin_bond_falls_route.geojson';
				
				
				
				
				map.on('load', function () {
				map.addSource('drone', { type: 'geojson', data: url});

				map.addLayer({"id": "drone","type": "line","source": "drone",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
                
				map.addSource('drone1', { type: 'geojson', data: url1 });
				map.addLayer({ "id": "drone1", "type": "line", "source": "drone1",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone2', { type: 'geojson', data: url2 });
				map.addLayer({ "id": "drone2", "type": "line", "source": "drone2",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone3', { type: 'geojson', data: url3 });
				map.addLayer({ "id": "drone3", "type": "line", "source": "drone3",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone4', { type: 'geojson', data: url4 });
				map.addLayer({ "id": "drone4", "type": "line", "source": "drone4",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone5', { type: 'geojson', data: url5 });
				map.addLayer({ "id": "drone5", "type": "line", "source": "drone5",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone6', { type: 'geojson', data: url6 });
				map.addLayer({ "id": "drone6", "type": "line", "source": "drone6",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone7', { type: 'geojson', data: url7 });
				map.addLayer({ "id": "drone7", "type": "line", "source": "drone7",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone8', { type: 'geojson', data: url8 });
				map.addLayer({ "id": "drone8", "type": "line", "source": "drone8",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone9', { type: 'geojson', data: url9 });
				map.addLayer({ "id": "drone9", "type": "line", "source": "drone9",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone10', { type: 'geojson', data: url10 });
				map.addLayer({ "id": "drone10", "type": "line", "source": "drone10",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone11', { type: 'geojson', data: url11 });
				map.addLayer({ "id": "drone11", "type": "line", "source": "drone11",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone12', { type: 'geojson', data: url12 });
				map.addLayer({ "id": "drone12", "type": "line", "source": "drone12",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone13', { type: 'geojson', data: url13 });
				map.addLayer({ "id": "drone13", "type": "line", "source": "drone13",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone14', { type: 'geojson', data: url14 });
				map.addLayer({ "id": "drone14", "type": "line", "source": "drone14",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone15', { type: 'geojson', data: url15 });
				map.addLayer({ "id": "drone15", "type": "line", "source": "drone15",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone16', { type: 'geojson', data: url16 });
				map.addLayer({ "id": "drone16", "type": "line", "source": "drone16",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone17', { type: 'geojson', data: url17 });
				map.addLayer({ "id": "drone17", "type": "line", "source": "drone17",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone18', { type: 'geojson', data: url18 });
				map.addLayer({ "id": "drone18", "type": "line", "source": "drone18",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone19', { type: 'geojson', data: url19 });
				map.addLayer({ "id": "drone19", "type": "line", "source": "drone19",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone20', { type: 'geojson', data: url20 });
				map.addLayer({ "id": "drone20", "type": "line", "source": "drone20",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone21', { type: 'geojson', data: url21 });
				map.addLayer({ "id": "drone21", "type": "line", "source": "drone21",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone22', { type: 'geojson', data: url22 });
				map.addLayer({ "id": "drone22", "type": "line", "source": "drone22",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone23', { type: 'geojson', data: url23 });
				map.addLayer({ "id": "drone23", "type": "line", "source": "drone23",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone24', { type: 'geojson', data: url24 });
				map.addLayer({ "id": "drone24", "type": "line", "source": "drone24",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone25', { type: 'geojson', data: url25 });
				map.addLayer({ "id": "drone25", "type": "line", "source": "drone25",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone26', { type: 'geojson', data: url26 });
				map.addLayer({ "id": "drone26", "type": "line", "source": "drone26",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone27', { type: 'geojson', data: url27 });
				map.addLayer({ "id": "drone27", "type": "line", "source": "drone27",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone28', { type: 'geojson', data: url28 });
				map.addLayer({ "id": "drone28", "type": "line", "source": "drone28",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone29', { type: 'geojson', data: url29 });
				map.addLayer({ "id": "drone29", "type": "line", "source": "drone29",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone30', { type: 'geojson', data: url30 });
				map.addLayer({ "id": "drone30", "type": "line", "source": "drone30",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone31', { type: 'geojson', data: url31 });
				map.addLayer({ "id": "drone31", "type": "line", "source": "drone31",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone32', { type: 'geojson', data: url32 });
				map.addLayer({ "id": "drone32", "type": "line", "source": "drone32",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone33', { type: 'geojson', data: url33 });
				map.addLayer({ "id": "drone33", "type": "line", "source": "drone33",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone34', { type: 'geojson', data: url34 });
				map.addLayer({ "id": "drone34", "type": "line", "source": "drone34",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone35', { type: 'geojson', data: url35 });
				map.addLayer({ "id": "drone35", "type": "line", "source": "drone35",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone36', { type: 'geojson', data: url36 });
				map.addLayer({ "id": "drone36", "type": "line", "source": "drone36",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone37', { type: 'geojson', data: url37 });
				map.addLayer({ "id": "drone37", "type": "line", "source": "drone37",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone38', { type: 'geojson', data: url38 });
				map.addLayer({ "id": "drone38", "type": "line", "source": "drone38",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
				
				map.addSource('drone39', { type: 'geojson', data: url39 });
				map.addLayer({ "id": "drone39", "type": "line", "source": "drone39",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "red", "line-width": 2 }});
			
				
				
				//atv
				map.addSource('atv', { type: 'geojson', data: atv});

				map.addLayer({"id": "atv","type": "line","source": "atv",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
         
				map.addSource('atv1', { type: 'geojson', data: atv1 });
				map.addLayer({ "id": "atv1", "type": "line", "source": "atv1",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv2', { type: 'geojson', data: atv2 });
				map.addLayer({ "id": "atv2", "type": "line", "source": "atv2",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv3', { type: 'geojson', data: atv3 });
				map.addLayer({ "id": "atv3", "type": "line", "source": "atv3",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv4', { type: 'geojson', data: atv4 });
				map.addLayer({ "id": "atv4", "type": "line", "source": "atv4",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv5', { type: 'geojson', data: atv5 });
				map.addLayer({ "id": "atv5", "type": "line", "source": "atv5",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv6', { type: 'geojson', data: atv6 });
				map.addLayer({ "id": "atv6", "type": "line", "source": "atv6",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv7', { type: 'geojson', data: atv7 });
				map.addLayer({ "id": "atv7", "type": "line", "source": "atv7",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv8', { type: 'geojson', data: atv8 });
				map.addLayer({ "id": "atv8", "type": "line", "source": "atv8",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv9', { type: 'geojson', data: atv9 });
				map.addLayer({ "id": "atv9", "type": "line", "source": "atv9",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv10', { type: 'geojson', data: atv10 });
				map.addLayer({ "id": "atv10", "type": "line", "source": "atv10",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv11', { type: 'geojson', data: atv11 });
				map.addLayer({ "id": "atv11", "type": "line", "source": "atv11",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv12', { type: 'geojson', data: atv12 });
				map.addLayer({ "id": "atv12", "type": "line", "source": "atv12",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv13', { type: 'geojson', data: atv13 });
				map.addLayer({ "id": "atv13", "type": "line", "source": "atv13",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv14', { type: 'geojson', data: atv14 });
				map.addLayer({ "id": "atv14", "type": "line", "source": "atv14",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv15', { type: 'geojson', data: atv15 });
				map.addLayer({ "id": "atv15", "type": "line", "source": "atv15",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv16', { type: 'geojson', data: atv16 });
				map.addLayer({ "id": "atv16", "type": "line", "source": "atv16",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv17', { type: 'geojson', data: atv17 });
				map.addLayer({ "id": "atv17", "type": "line", "source": "atv17",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv18', { type: 'geojson', data: atv18 });
				map.addLayer({ "id": "atv18", "type": "line", "source": "atv18",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv19', { type: 'geojson', data: atv19 });
				map.addLayer({ "id": "atv19", "type": "line", "source": "atv19",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv20', { type: 'geojson', data: atv20 });
				map.addLayer({ "id": "atv20", "type": "line", "source": "atv20",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv21', { type: 'geojson', data: atv21 });
				map.addLayer({ "id": "atv21", "type": "line", "source": "atv21",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv22', { type: 'geojson', data: atv22 });
				map.addLayer({ "id": "atv22", "type": "line", "source": "atv22",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv23', { type: 'geojson', data: atv23 });
				map.addLayer({ "id": "atv23", "type": "line", "source": "atv23",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv24', { type: 'geojson', data: atv24 });
				map.addLayer({ "id": "atv24", "type": "line", "source": "atv24",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv25', { type: 'geojson', data: atv25 });
				map.addLayer({ "id": "atv25", "type": "line", "source": "atv25",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv26', { type: 'geojson', data: atv26 });
				map.addLayer({ "id": "atv26", "type": "line", "source": "atv26",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv27', { type: 'geojson', data: atv27 });
				map.addLayer({ "id": "atv27", "type": "line", "source": "atv27",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv28', { type: 'geojson', data: atv28 });
				map.addLayer({ "id": "atv28", "type": "line", "source": "atv28",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv29', { type: 'geojson', data: atv29 });
				map.addLayer({ "id": "atv29", "type": "line", "source": "atv29",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv30', { type: 'geojson', data: atv30 });
				map.addLayer({ "id": "atv30", "type": "line", "source": "atv30",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv31', { type: 'geojson', data: atv31 });
				map.addLayer({ "id": "atv31", "type": "line", "source": "atv31",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv32', { type: 'geojson', data: atv32 });
				map.addLayer({ "id": "atv32", "type": "line", "source": "atv32",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv33', { type: 'geojson', data: atv33 });
				map.addLayer({ "id": "atv33", "type": "line", "source": "atv33",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv34', { type: 'geojson', data: atv34 });
				map.addLayer({ "id": "atv34", "type": "line", "source": "atv34",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv35', { type: 'geojson', data: atv35 });
				map.addLayer({ "id": "atv35", "type": "line", "source": "atv35",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv36', { type: 'geojson', data: atv36 });
				map.addLayer({ "id": "atv36", "type": "line", "source": "atv36",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv37', { type: 'geojson', data: atv37 });
				map.addLayer({ "id": "atv37", "type": "line", "source": "atv37",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv38', { type: 'geojson', data: atv38 });
				map.addLayer({ "id": "atv38", "type": "line", "source": "atv38",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv39', { type: 'geojson', data: atv39 });
				map.addLayer({ "id": "atv39", "type": "line", "source": "atv39",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				 
				map.addSource('atv40', { type: 'geojson', data: atv40 });
				map.addLayer({ "id": "atv40", "type": "line", "source": "atv40",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv41', { type: 'geojson', data: atv41 });
				map.addLayer({ "id": "atv41", "type": "line", "source": "atv41",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				 
				map.addSource('atv42', { type: 'geojson', data: atv42 });
				map.addLayer({ "id": "atv42", "type": "line", "source": "atv42",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv43', { type: 'geojson', data: atv43 });
				map.addLayer({ "id": "atv43", "type": "line", "source": "atv43",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				 
				map.addSource('atv44', { type: 'geojson', data: atv44 });
				map.addLayer({ "id": "atv44", "type": "line", "source": "atv44",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				
				map.addSource('atv45', { type: 'geojson', data: atv45 });
				map.addLayer({ "id": "atv45", "type": "line", "source": "atv45",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "#04FF07", "line-width": 2 }});
				 
				
				//utv
				map.addSource('utv', { type: 'geojson', data: utv});

				map.addLayer({"id": "utv","type": "line","source": "utv",
                "layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
         
				map.addSource('utv1', { type: 'geojson', data: utv1 });
				map.addLayer({ "id": "utv1", "type": "line", "source": "utv1",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv2', { type: 'geojson', data: utv2 });
				map.addLayer({ "id": "utv2", "type": "line", "source": "utv2",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv3', { type: 'geojson', data: utv3 });
				map.addLayer({ "id": "utv3", "type": "line", "source": "utv3",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv4', { type: 'geojson', data: utv4 });
				map.addLayer({ "id": "utv4", "type": "line", "source": "utv4",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv5', { type: 'geojson', data: utv5 });
				map.addLayer({ "id": "utv5", "type": "line", "source": "utv5",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('  utv6', { type: 'geojson', data: utv6 });
				map.addLayer({ "id": "utv6", "type": "line", "source": "utv6",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv7', { type: 'geojson', data: utv7 });
				map.addLayer({ "id": "utv7", "type": "line", "source": "utv7",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv8', { type: 'geojson', data: utv8 });
				map.addLayer({ "id": "utv8", "type": "line", "source": "utv8",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv9', { type: 'geojson', data: utv9 });
				map.addLayer({ "id": "utv9", "type": "line", "source": "utv9",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv10', { type: 'geojson', data: utv10 });
				map.addLayer({ "id": "utv10", "type": "line", "source": "utv10",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv11', { type: 'geojson', data: utv11 });
				map.addLayer({ "id": "utv11", "type": "line", "source": "utv11",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv12', { type: 'geojson', data: utv12 });
				map.addLayer({ "id": "utv12", "type": "line", "source": "utv12",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv13', { type: 'geojson', data: utv13 });
				map.addLayer({ "id": "utv13", "type": "line", "source": "utv13",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv14', { type: 'geojson', data: utv14 });
				map.addLayer({ "id": "utv14", "type": "line", "source": "utv14",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv15', { type: 'geojson', data: utv15 });
				map.addLayer({ "id": "utv15", "type": "line", "source": "utv15",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv16', { type: 'geojson', data: utv16 });
				map.addLayer({ "id": "utv16", "type": "line", "source": "utv16",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv17', { type: 'geojson', data: utv17 });
				map.addLayer({ "id": "utv17", "type": "line", "source": "utv17",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv18', { type: 'geojson', data: utv18 });
				map.addLayer({ "id": "utv18", "type": "line", "source": "utv18",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv19', { type: 'geojson', data: utv19 });
				map.addLayer({ "id": "utv19", "type": "line", "source": "utv19",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv20', { type: 'geojson', data: utv20 });
				map.addLayer({ "id": "utv20", "type": "line", "source": "utv20",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv21', { type: 'geojson', data: utv21 });
				map.addLayer({ "id": "utv21", "type": "line", "source": "utv21",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv22', { type: 'geojson', data: utv22 });
				map.addLayer({ "id": "utv22", "type": "line", "source": "utv22",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv23', { type: 'geojson', data: utv23 });
				map.addLayer({ "id": "utv23", "type": "line", "source": "utv23",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv24', { type: 'geojson', data: utv24 });
				map.addLayer({ "id": "utv24", "type": "line", "source": "utv24",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv25', { type: 'geojson', data: utv25 });
				map.addLayer({ "id": "utv25", "type": "line", "source": "utv25",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv26', { type: 'geojson', data: utv26 });
				map.addLayer({ "id": "utv26", "type": "line", "source": "utv26",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv27', { type: 'geojson', data: utv27 });
				map.addLayer({ "id": "utv27", "type": "line", "source": "utv27",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv28', { type: 'geojson', data: utv28 });
				map.addLayer({ "id": "utv28", "type": "line", "source": "utv28",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv29', { type: 'geojson', data: utv29 });
				map.addLayer({ "id": "utv29", "type": "line", "source": "utv29",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv30', { type: 'geojson', data: utv30 });
				map.addLayer({ "id": "utv30", "type": "line", "source": "utv30",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv31', { type: 'geojson', data: utv31 });
				map.addLayer({ "id": "utv31", "type": "line", "source": "utv31",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv32', { type: 'geojson', data: utv32 });
				map.addLayer({ "id": "utv32", "type": "line", "source": "utv32",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv33', { type: 'geojson', data: utv33 });
				map.addLayer({ "id": "utv33", "type": "line", "source": "utv33",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv34', { type: 'geojson', data: utv34 });
				map.addLayer({ "id": "utv34", "type": "line", "source": "utv34",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv35', { type: 'geojson', data: utv35 });
				map.addLayer({ "id": "utv35", "type": "line", "source": "utv35",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv36', { type: 'geojson', data: utv36 });
				map.addLayer({ "id": "utv36", "type": "line", "source": "utv36",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv37', { type: 'geojson', data: utv37 });
				map.addLayer({ "id": "utv37", "type": "line", "source": "utv37",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv38', { type: 'geojson', data: utv38 });
				map.addLayer({ "id": "utv38", "type": "line", "source": "utv38",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv39', { type: 'geojson', data: utv39 });
				map.addLayer({ "id": "utv39", "type": "line", "source": "utv39",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				 
				map.addSource('utv40', { type: 'geojson', data: utv40 });
				map.addLayer({ "id": "utv40", "type": "line", "source": "utv40",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				map.addSource('utv41', { type: 'geojson', data: utv41 });
				map.addLayer({ "id": "utv41", "type": "line", "source": "utv41",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				 
				map.addSource('utv42', { type: 'geojson', data: utv42 });
				map.addLayer({ "id": "utv42", "type": "line", "source": "utv42",
				"layout": { "line-join": "round", "line-cap": "round" },
                "paint": {"line-color": "blue", "line-width": 2 }});
				
				
				}); 
				
				
				
				
				map.addControl(new mapboxgl.FullscreenControl());
				map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

function aboutFunction() {
    window.location="About.html";
};
function legandFunction() {
    var legand = document.getElementById("legand_button");
	var legandbutton = document.getElementById("legand_container");
    legand.style.visibility='hidden';
    legandbutton.style.visibility='visible';
};
function legandFunction2() {
    var legand = document.getElementById("legand_button");
	var legandbutton = document.getElementById("legand_container");
    legand.style.visibility='visible';
    legandbutton.style.visibility='hidden';
};
/**function mapSettingFunction() {
    // Get the snackbar DIV
    var mapsetting = document.getElementById("snackbar");

    // Add the "show" class to DIV
    mapsetting.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ mapsetting.className = mapsetting.className.replace("show", ""); }, 3000);
}**/
function fbFunction() {
    setTimeout(function () { window.location = "https://www.facebook.com/OrvTrailMate/"; }, 25);
	window.location = "fb://page/1731877297109570";
}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    //if (/windows phone/i.test(userAgent)) {
        //return "Windows Phone";}

    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";}
    return "unknown";
}
function mapSettingFunction(){
	document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function mapSettingFunction(){
	document.getElementById("mySidenav").style.width = "300px";
    
}
function mapSettingFunction(){
	document.getElementById("mySidenav").style.width = "300px";
    
}
function mapSettingFunction(){
	document.getElementById("mySidenav").style.width = "300px";
    
}
