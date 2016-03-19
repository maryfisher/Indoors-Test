package com.indoors.test.rest.common.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;

@Consumes(MediaType.APPLICATION_JSON_VALUE)
@Produces(MediaType.APPLICATION_JSON_VALUE)
public abstract class AbstractResource {

    protected final Logger logger = LoggerFactory.getLogger(getClass());

    //Runtime will inject request-scoped proxy into singleton resource class field
    @Context
    private SecurityContext securityContext;
}
