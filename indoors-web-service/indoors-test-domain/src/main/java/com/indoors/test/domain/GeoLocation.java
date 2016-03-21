package com.indoors.test.domain;

import javax.persistence.Embeddable;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Embeddable
public class GeoLocation {

    private Integer lat;

    private Integer lng;

    public Integer getLat() {
        return lat;
    }

    public void setLat(Integer lat) {
        this.lat = lat;
    }

    public Integer getLng() {
        return lng;
    }

    public void setLng(Integer lng) {
        this.lng = lng;
    }
}
