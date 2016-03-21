package com.indoors.test.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Generated(GenerationTime.INSERT)
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public final int hashCode() {
        return id != null ? id.hashCode() : -1;
    }

    @Override
    public final boolean equals(Object obj) {
        return this == obj || id != null && obj instanceof AbstractEntity && id.equals(((AbstractEntity) obj).id);
    }
}