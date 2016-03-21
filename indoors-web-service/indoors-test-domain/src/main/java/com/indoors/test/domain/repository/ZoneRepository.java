package com.indoors.test.domain.repository;

import com.indoors.test.domain.Zone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author mary_fisher
 * @version 1.0
 * @since 19.03.2016
 */
@Repository
@Transactional(readOnly = true)
public interface ZoneRepository extends JpaRepository<Zone, Integer> {
}
