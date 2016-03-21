package com.indoors.test.domain.repository;

import com.indoors.test.domain.Beacon;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
public interface BeaconRepository extends JpaRepository<Beacon, Integer> {
}
