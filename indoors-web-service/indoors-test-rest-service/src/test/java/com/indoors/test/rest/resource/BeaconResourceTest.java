package com.indoors.test.rest.resource;

import com.indoors.test.domain.Beacon;
import com.indoors.test.rest.AbstractTest;
import org.junit.Test;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 21.03.2016
 */
public class BeaconResourceTest extends AbstractTest {

    @Test
    public void testFindAllBeacons() throws Exception {
        Response response = target("beacon").request().get();

        assertEquals(200, response.getStatus());
    }

    @Test
    public void testFindOneBeacon() throws Exception {
        Response response = target("beacon/1").request().get();

        assertEquals(200, response.getStatus());
        assertNotNull(response.getEntity());

        response = target("beacon/0").request().get();

        assertEquals(400, response.getStatus());
    }

    @Test
    public void testUpdateZone() throws Exception {
        Response response = target("beacon/1").request().post(Entity.json(new Beacon()));

        assertEquals(200, response.getStatus());
        assertNotNull(response.readEntity(Beacon.class));

        response = target("beacon/0").request().post(Entity.json(new Beacon()));

        assertEquals(400, response.getStatus());
    }
}
