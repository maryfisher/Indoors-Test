package com.indoors.test.rest;

import com.indoors.test.rest.config.JerseyConfig;
import com.indoors.test.rest.config.JerseyTestConfig;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.test.JerseyTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import javax.ws.rs.core.Application;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 20.03.2016
 */
public class AbstractTest extends JerseyTest {

    @Override
    protected Application configure() {
        ApplicationContext context = new AnnotationConfigApplicationContext(JerseyTestConfig.class);
        return new JerseyConfig().property("contextConfig", context);
    }

    @Override
    protected void configureClient(ClientConfig config) {
        config.register(JacksonFeature.class);
    }
}
