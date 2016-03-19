package com.indoors.test.rest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class SpringBootWebConfig {

    @Bean
    public WebMvcConfigurerAdapter webMvcConfigurerAdapter() {

        // No need to override WebMvcConfigurerAdapter::addResourceHandlers because
        // Spring Boot already offers properties spring.resources.staticLocations, spring.resources.cachePeriod
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/").setViewName("forward:/index.html");
            }
        };

    }

}
