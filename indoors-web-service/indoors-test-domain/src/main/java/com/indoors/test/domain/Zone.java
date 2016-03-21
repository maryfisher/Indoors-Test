package com.indoors.test.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.Valid;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Zone extends AbstractEntity {

    private String name;

    private String description;

    @OneToOne
    @JoinColumn(name = "beacon_id")
    @Valid
    private Beacon beacon;

    @Enumerated(EnumType.STRING)
    private ZoneSize size;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Beacon getBeacon() {
        return beacon;
    }

    public void setBeacon(Beacon beacon) {
        this.beacon = beacon;
    }

    public ZoneSize getSize() {
        return size;
    }

    public void setSize(ZoneSize size) {
        this.size = size;
    }

    public enum ZoneSize {
        LARGE,
        MEDIUM,
        SMALL
    }
}
