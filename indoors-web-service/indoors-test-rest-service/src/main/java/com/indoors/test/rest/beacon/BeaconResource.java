package com.indoors.test.rest.beacon;

import com.indoors.test.domain.Beacon;
import com.indoors.test.domain.repository.BeaconRepository;
import com.indoors.test.rest.common.resource.AbstractResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Singleton;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.util.List;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Component
@Singleton
public class BeaconResource extends AbstractResource {

    @Autowired
    private BeaconRepository beaconRepository;

    @GET
    public List<Beacon> retrieveAllBeacons() {
        logger.info("Incoming request to retrieve all beacons");
        return beaconRepository.findAll();
    }

    @GET
    @Path("/{beaconId}")
    public Beacon retrieveBeaconById(@NotNull @Min(1) @PathParam("beaconId") Integer beaconId) {
        logger.info("Incoming request to retrieve beacon {}", beaconId);
        return beaconRepository.findOne(beaconId);
    }

    @POST
    @Path("/{beaconId}")
    @Transactional
    @Modifying
    public Beacon updateBeacon(@NotNull @Min(1) @PathParam("beaconId") Integer beaconId,
                               @NotNull @Valid Beacon changedBeacon) {
        changedBeacon.setId(beaconId);
        changedBeacon = beaconRepository.save(changedBeacon);
        return changedBeacon;
    }
}