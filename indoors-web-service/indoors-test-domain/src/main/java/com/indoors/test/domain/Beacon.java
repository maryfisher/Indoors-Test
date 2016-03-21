package com.indoors.test.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.Date;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Beacon extends AbstractEntity {

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private BeaconVendor vendor;

    private String uuid;

    private Integer major;

    private Integer minor;

    private Integer txPower;

    private Date installationDate;

    @Embedded
    private GeoLocation geoLocation;

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

    public BeaconVendor getVendor() {
        return vendor;
    }

    public void setVendor(BeaconVendor vendor) {
        this.vendor = vendor;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public Integer getMajor() {
        return major;
    }

    public void setMajor(Integer major) {
        this.major = major;
    }

    public Integer getMinor() {
        return minor;
    }

    public void setMinor(Integer minor) {
        this.minor = minor;
    }

    public Integer getTxPower() {
        return txPower;
    }

    public void setTxPower(Integer txPower) {
        this.txPower = txPower;
    }

    public Date getInstallationDate() {
        return installationDate;
    }

    public void setInstallationDate(Date installationDate) {
        this.installationDate = installationDate;
    }

    public GeoLocation getGeoLocation() {
        return geoLocation;
    }

    public void setGeoLocation(GeoLocation geoLocation) {
        this.geoLocation = geoLocation;
    }

    public enum BeaconVendor {
        VENDOR_A,
        VENDOR_B,
        VENDOR_C
    }
}
