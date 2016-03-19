package com.indoors.test.rest.common.resource;

import org.springframework.stereotype.Component;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Component
@Singleton
public class InternalResource extends AbstractResource {

    @GET
    @Path("/monitoring/healthcheck")
    public String getHealthcheck() {
        logger.info("Incoming healthcheck call");
        return "{\"status\":\"OK\",\"message\":\"OK!\"}";
    }

}
