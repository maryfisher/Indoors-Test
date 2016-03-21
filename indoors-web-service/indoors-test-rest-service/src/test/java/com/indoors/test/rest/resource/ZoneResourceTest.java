package com.indoors.test.rest.resource;

import com.indoors.test.domain.Beacon;
import com.indoors.test.domain.Zone;
import com.indoors.test.rest.AbstractTest;
import org.junit.Test;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Response;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 20.03.2016
 */
public class ZoneResourceTest extends AbstractTest {

    @Test
    public void testFindAllZones() throws Exception {

        Response response = target("zone").request().get();

        assertEquals(200, response.getStatus());
        assertNotNull(response.getEntity());
    }

    @Test
    public void testFindOneZone() throws Exception {
        Response response = target("zone/1").request().get();

        assertEquals(200, response.getStatus());
        assertNotNull(response.getEntity());

        response = target("zone/0").request().get();

        assertEquals(400, response.getStatus());
    }

    @Test
    public void testCreateZone() throws Exception {
        Zone zone = new Zone();
        zone.setBeacon(new Beacon());
        Response response = target("zone").request().post(Entity.json(zone));

        assertEquals(200, response.getStatus());
        assertNotNull(response.readEntity(Zone.class));

        response = target("zone").request().post(Entity.json(new Zone()));

        assertEquals(500, response.getStatus());
    }

    @Test
    public void testUpdateZone() throws Exception {
        Response response = target("zone/1").request().post(Entity.json(new Zone()));

        assertEquals(200, response.getStatus());
        assertNotNull(response.readEntity(Zone.class));

        response = target("zone/0").request().post(Entity.json(new Zone()));

        assertEquals(400, response.getStatus());
    }

    @Test
    public void testDeleteZone() throws Exception {
        Response response = target("zone/1").request().delete();

        assertEquals(204, response.getStatus());
    }
}
