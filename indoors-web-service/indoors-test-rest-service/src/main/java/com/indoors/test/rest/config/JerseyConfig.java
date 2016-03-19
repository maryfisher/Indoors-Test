package com.indoors.test.rest.config;

import com.indoors.test.rest.RootResource;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import javax.ws.rs.ApplicationPath;

@Configuration
@ApplicationPath("/api") //Restrict Jersey to /api endpoints to allow Spring Boot to serve static content
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        //Jersey REST endpoints
        register(RootResource.class);


        //Jackson features
        register(JacksonFeature.class);
    }
}
