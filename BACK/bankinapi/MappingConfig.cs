using AutoMapper;
using bankinapi.Models;
using Mango.Service.ProductAPI.Models.Dto;

namespace bankinapi
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<UsusarioDto, Usuario>();
                config.CreateMap<Usuario, UsusarioDto>();
            });
            return mappingConfig;
        }
    }
}
