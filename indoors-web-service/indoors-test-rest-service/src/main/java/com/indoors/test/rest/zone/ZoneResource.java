package com.indoors.test.rest.zone;

import com.indoors.test.domain.Beacon;
import com.indoors.test.domain.Zone;
import com.indoors.test.domain.repository.BeaconRepository;
import com.indoors.test.domain.repository.ZoneRepository;
import com.indoors.test.rest.common.resource.AbstractResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Singleton;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import java.util.List;
import java.util.UUID;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Component
@Singleton
public class ZoneResource extends AbstractResource {

    @Autowired
    private ZoneRepository zoneRepository;

    @Autowired
    private BeaconRepository beaconRepository;

    @GET
    public List<Zone> retrieveAllZones() {
        logger.info("Incoming request to retrieve all zones");
        return zoneRepository.findAll();
    }

    @GET
    @Path("/{zoneId}")
    public Zone retrieveZoneById(@NotNull @Min(1) @PathParam("zoneId") Integer zoneId) {
        logger.info("Incoming request to retrieve zone {}", zoneId);
        return zoneRepository.findOne(zoneId);
    }

    @POST
    @Transactional
    @Modifying
    public Zone createNewZone(@NotNull @Valid Zone zone) {
        logger.info("Incoming request to create a zone");

        Beacon beacon = zone.getBeacon();
        beacon.setId(null);
        beacon.setUuid(UUID.randomUUID().toString());
        beacon = beaconRepository.save(beacon);

        zone.setId(null);
        zone.setBeacon(beacon);
        zone = zoneRepository.save(zone);
        return zone;
    }

    @POST
    @Path("/{zoneId}")
    @Transactional
    @Modifying
    public Zone updateZone(@NotNull @Min(1) @PathParam("zoneId") Integer zoneId,
                           @NotNull @Valid Zone changedZone) {
        logger.info("Incoming request to update zone {}", zoneId);
        changedZone.setId(zoneId);
        changedZone = zoneRepository.save(changedZone);
        return changedZone;
    }

    @DELETE
    @Path("/{zoneId}")
    @Transactional
    @Modifying
    public void deleteZone(@NotNull @Min(1) @PathParam("zoneId") Integer zoneId) {
        logger.info("Incoming request to delete zone {}", zoneId);
        //NOTE: does beacon need to be deleted too??
        zoneRepository.delete(zoneId);
    }
}