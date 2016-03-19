package com.indoors.test.rest;

import com.indoors.test.rest.common.resource.AbstractResource;
import com.indoors.test.rest.common.resource.InternalResource;
import org.springframework.stereotype.Component;

import javax.inject.Singleton;
import javax.ws.rs.Path;

@Component
@Singleton
@Path("/") //JerseyConfig already defines "/api" as endpoint start
public class RootResource extends AbstractResource {

    @Path("/internal")
    public Class<InternalResource> getInternalResource() {
        return InternalResource.class;
    }

}
