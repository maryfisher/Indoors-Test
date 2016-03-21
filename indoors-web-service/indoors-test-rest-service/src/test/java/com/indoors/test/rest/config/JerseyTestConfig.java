package com.indoors.test.rest.config;

import com.indoors.test.domain.Beacon;
import com.indoors.test.domain.Zone;
import com.indoors.test.domain.repository.BeaconRepository;
import com.indoors.test.domain.repository.ZoneRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import java.util.Collections;

import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 20.03.2016
 */
@Configuration
@Import({JerseyConfig.class})
public class JerseyTestConfig {

    @Bean
    public ZoneRepository zoneRepository() {
        ZoneRepository mockRepository = mock(ZoneRepository.class);

        when(mockRepository.findAll()).thenReturn(Collections.<Zone>emptyList());
        when(mockRepository.findOne(any(Integer.class))).thenReturn(new Zone());
        when(mockRepository.save(any(Zone.class))).then(returnsFirstArg());

        return mockRepository;
    }

    @Bean
    public BeaconRepository beaconRepository() {
        BeaconRepository mockRepository = mock(BeaconRepository.class);
        when(mockRepository.findAll()).thenReturn(Collections.<Beacon>emptyList());
        when(mockRepository.findOne(any(Integer.class))).thenReturn(new Beacon());
        when(mockRepository.save(any(Beacon.class))).then(returnsFirstArg());

        return mockRepository;
    }
}
