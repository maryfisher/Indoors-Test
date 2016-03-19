package com.indoors.test.rest.config;

import com.indoors.test.domain.AbstractEntity;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EntityScan(basePackageClasses = {AbstractEntity.class})
@EnableJpaRepositories(basePackageClasses = {AbstractEntity.class})
@EnableTransactionManagement
public class DatabaseConfig {

}
